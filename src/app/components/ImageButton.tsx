type ImageButtonProps = {
  src: string;
  alt: string;
  onClick?: () => void;
  size?: number;
  ariaLabel?: string;
  className?: string;
  label?: string; 
};

export default function ImageButton({
  src,
  alt,
  onClick,
  size = 64,
  ariaLabel,
  className = "",
  label,
}: ImageButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`hover:scale-105 transition p-1 flex flex-col items-center ${className}`}
      aria-label={ariaLabel || alt}
    >
      <img src={src} alt={alt} style={{ width: size, height: size }} />
      {label && <span className="mt-2 font-roboto-mono text-md text-gray-700">{label}</span>}
    </button>
  );
}
