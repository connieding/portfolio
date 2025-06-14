type CardProps = {
  children: React.ReactNode;
  className?: string;
  headerText?: string;
};

export default function Card({ children, className = "", headerText }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md text-center ${className}`}
      style={{ boxShadow: "0 0 0 3px var(--text-tertiary)" }}
    >
      <div className="h-12 bg-[#333333] rounded-t-lg flex items-center justify-left px-8">
        {headerText && (
          <span className="text-white font-roboto-mono text-lg select-none">
            {headerText}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
