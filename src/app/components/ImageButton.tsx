import { useRef } from "react";

type ImageButtonProps = {
  src: string;
  alt: string;
  onClick?: () => void;
  size?: number;
  ariaLabel?: string;
  className?: string;
  label?: string;
  isActive?: boolean; // New prop for toggle state
};

export default function ImageButton({
  src,
  alt,
  onClick,
  size = 64,
  ariaLabel,
  className = "",
  label,
  isActive = false,
}: ImageButtonProps) {
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    clickAudioRef.current?.play();
    if (onClick) onClick();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`
          hover:scale-105 
          transition 
          p-1 
          flex 
          flex-col 
          items-center 
          ${isActive ? "scale-110 opacity-100" : "scale-100 opacity-80 hover:opacity-100"}
          ${className}
        `}
        aria-label={ariaLabel || alt}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: size, height: size }}
          className={isActive ? "brightness-110" : ""}
        />
        {label && (
          <span
            className="mt-1 font-roboto-mono text-md"
            style={{
              color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
            }}
          >
            {label}
          </span>
        )}
      </button>

      {/* Hidden audio element */}
      <audio ref={clickAudioRef} src="/sounds/pop.mp3" preload="auto" />
    </>
  );
}
