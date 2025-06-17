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
      className={`bg-white rounded-lg shadow-md text-center ${className}`}
      style={{ boxShadow: "0 0 0 3px var(--text-tertiary)" }}
    >
      <div className="card-header h-12 bg-[#333333] rounded-t-lg flex items-center justify-between px-6">
        {headerText && (
          <span className="text-white font-roboto-mono text-lg select-none">
            {headerText}
          </span>
        )}
        {headerRight && headerRight}
      </div>
      {children}
    </div>
  );
}
