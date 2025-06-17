import { useState, useRef, useEffect } from 'react';
import Card from './Card';
import AboutCardContent from '../pages/AboutCardContent';
import LinksCardContent from '../pages/LinksCardContent';
import WorksCardContent from '../pages/WorksCardContent';
import ContactsCardContent from '../pages/ContactsCardContent';

type DraggableCardProps = {
  id: string;
  type: string;
  initialPosition: { x: number; y: number };
  onClose: (id: string) => void;
  zIndex: number;
  onFocus: () => void; // 👈 new prop
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
  const cardRef = useRef<HTMLDivElement>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  const getCardContent = () => {
    switch (type) {
      case 'about':
        return <AboutCardContent />;
      case 'links':
        return <LinksCardContent />;
      case 'works':
        return <WorksCardContent />;
      case 'contacts':
        return <ContactsCardContent />;
      default:
        return <div className="p-4">Unknown card type</div>;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus(); // 👈 bring card to front on click
    const header = cardRef.current?.querySelector('.card-header');
    if (header && (e.target as HTMLElement).closest('.card-header') === header) {
      setIsDragging(true);
      const rect = cardRef.current!.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleCloseClick = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;

      const audio = clickAudioRef.current;
      const onEnded = () => {
        onClose(id);
        audio.removeEventListener('ended', onEnded);
      };

      audio.addEventListener('ended', onEnded);
      audio.play().catch((e) => {
        console.error(e);
        onClose(id);
      });
    } else {
      onClose(id);
    }
  };

  return (
    <>
      <div
        ref={cardRef}
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          zIndex,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
      >
        <Card
          className="w-[400px] h-[300px] max-w-full"
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
          {getCardContent()}
        </Card>
      </div>

      {/* Hidden audio element */}
      <audio ref={clickAudioRef} src="/sounds/close.mp3" preload="auto" />
    </>
  );
}
