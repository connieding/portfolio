import ImageButton from "../components/ImageButton";

export default function LinksCardContent() {
  return (
    <div className="px-16 py-12">
      <div className="text-left" style={{ color: "var(--text-secondary)" }}>
        Find me here:
      </div>

      <div className="mt-8 flex gap-8 flex-wrap justify-center p-4">
        <ImageButton
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          label="LinkedIn"
          onClick={() =>
            window.open("https://www.linkedin.com/in/connie-ding", "_blank")
          }
          size={64}
        />
        <ImageButton
          src="/icons/github.svg"
          alt="GitHub"
          label="GitHub"
          onClick={() => window.open("https://github.com/connieding", "_blank")}
          size={64}
        />
      </div>
    </div>
  );
}
