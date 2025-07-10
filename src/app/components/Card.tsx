type CardProps = {
  children: React.ReactNode;
  className?: string;
  headerText?: string;
  headerRight?: React.ReactNode;
};

export default function Card({
  children,
  className = "",
  headerText,
  headerRight,
}: CardProps) {
  return (
    <div
      className={`resize bg-white rounded-lg text-center shadow-md ${className}`}
      style={{
        boxShadow: "0 0 0 3px var(--text-tertiary)",
        minWidth: "200px",
        minHeight: "150px",
        maxWidth: "90vw",
        maxHeight: "80vh",
      }}
    >
      <div className="card-header h-12 bg-[#333333] rounded-t-lg flex items-center justify-between px-6 cursor-move">
        {headerText && (
          <span className="text-white font-roboto-mono text-lg select-none">
            {headerText}
          </span>
        )}
        {headerRight}
      </div>
      {children}
    </div>
  );
}
