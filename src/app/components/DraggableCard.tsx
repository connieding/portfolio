import { useState, useRef, useEffect, useCallback } from "react";
import Card from "./Card";
import AboutCardContent from "../pages/AboutCardContent";
import LinksCardContent from "../pages/LinksCardContent";
import WorksCardContent from "../pages/WorksCardContent";
import ContactsCardContent from "../pages/ContactsCardContent";

type DraggableCardProps = {
  id: string;
  type: string;
  initialPosition: { x: number; y: number };
  onClose: (id: string) => void;
  zIndex: number;
  onFocus: () => void;
};

export default function DraggableCard({
  id,
  type,
  initialPosition,
  onClose,
  zIndex,
  onFocus,
}: DraggableCardProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [mobileCenterPos, setMobileCenterPos] = useState({ x: 0, y: 0 });

  const cardRef = useRef<HTMLDivElement>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  // Detect mobile screen and calculate center position
  useEffect(() => {
    function updateIsMobileAndPosition() {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      if (mobile && cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const x = (window.innerWidth - cardRect.width) / 2;
        const y = (window.innerHeight - cardRect.height) / 2;
        setMobileCenterPos({ x, y });
      } else {
        setPosition(initialPosition);
      }
    }

    updateIsMobileAndPosition();

    window.addEventListener("resize", updateIsMobileAndPosition);
    return () =>
      window.removeEventListener("resize", updateIsMobileAndPosition);
  }, [initialPosition]);

  const getCardContent = () => {
    switch (type) {
      case "about":
        return <AboutCardContent />;
      case "links":
        return <LinksCardContent />;
      case "works":
        return <WorksCardContent />;
      case "contacts":
        return <ContactsCardContent />;
      default:
        return <div className="p-4">Unknown card type</div>;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return; // disable dragging on mobile
    onFocus();
    const header = cardRef.current?.querySelector(".card-header");
    if (
      header &&
      (e.target as HTMLElement).closest(".card-header") === header
    ) {
      setIsDragging(true);
      const rect = cardRef.current!.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || isMobile) return;
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    },
    [isDragging, isMobile, offset]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging && !isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isMobile]);

  const handleCloseClick = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;

      const audio = clickAudioRef.current;
      const onEnded = () => {
        onClose(id);
        audio.removeEventListener("ended", onEnded);
      };

      audio.addEventListener("ended", onEnded);
      audio.play().catch((e) => {
        console.error(e);
        onClose(id);
      });
    } else {
      onClose(id);
    }
  };

  // Card size classes for responsive sizing
  const cardSizeClass =
    type === "links" || type === "contacts"
      ? "w-[400px] h-[350px] sm:w-[400px] sm:h-[350px] w-[90vw] h-[60vh]"
      : "w-[750px] h-[500px] sm:w-[750px] sm:h-[500px] w-[90vw] h-[70vh]";

  return (
    <>
      <div
        ref={cardRef}
        style={{
          position: "fixed",
          left: isMobile ? mobileCenterPos.x : position.x,
          top: isMobile ? mobileCenterPos.y : position.y,
          zIndex,
          cursor: isMobile ? "default" : isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
      >
        <Card
          className={`${cardSizeClass} rounded-lg shadow-lg`}
          headerText={type}
          headerRight={
            <button
              onClick={handleCloseClick}
              onMouseDown={(e) => e.stopPropagation()}
              className="font-roboto-mono text-white hover:text-gray-300 text-lg ml-auto"
            >
              [×]
            </button>
          }
        >
          <div className="h-[calc(100%-3rem)] overflow-y-auto">
            {getCardContent()}
          </div>
        </Card>
      </div>

      {/* Hidden audio element */}
      <audio ref={clickAudioRef} src="/sounds/close.mp3" preload="auto" />
    </>
  );
}
