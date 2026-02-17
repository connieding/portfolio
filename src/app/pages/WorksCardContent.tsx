import ToolsButton from "../components/ToolsButton";
import ProjectCard from "../components/ProjectCard";

export default function WorksCardContent() {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12">
      <div
        className="font-semibold text-left text-xl"
        style={{ color: "var(--text-quaternary)" }}
      >
        Projects
      </div>
      <div className="flex gap-8  justify-center md:justify-start flex-wrap mt-4 mb-4">
        <ProjectCard
          title="Partspedia"
          imgSrc="/works/partspedia.png"
          //
          description="Explore 2D vehicle diagrams, search parts by name or plate, and access automotive data through Partly APIs."
        />
        <ProjectCard
          title="The Stolen Text"
          imgSrc="/works/stolen_text.png"
          githubUrl="https://github.com/connieding/The-Stolen-Text"
          description="Play as a detective in this text-driven mystery adventure powered by OpenAI. Question suspects, uncover clues, and crack the case against the clock."
        />
        <ProjectCard
          title="Restore"
          imgSrc="/works/restore.png"
          githubUrl="https://github.com/calebwharton/Restore"
          description="A social platform for beach cleanups with a map interface to create, join, and track events."
        />
      </div>
      <div
        className="text-left mb-4 "
        style={{ color: "var(--text-secondary)" }}
      >
        See more of my projects on{" "}
        <a
          href="https://github.com/connieding"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-quaternary)" }}
          className="underline"
        >
          github
        </a>
        !
      </div>
      <div className="flex flex-row gap-16">
        {/* Languages Section */}
        <div className="flex-1 min-w-0">
          <div
            className="font-semibold text-left text-xl"
            style={{ color: "var(--text-quaternary)" }}
          >
            Languages
          </div>
          <div className="flex gap-4 justify-start flex-wrap mt-4">
            <ToolsButton>Java</ToolsButton>
            <ToolsButton>JavaScript</ToolsButton>
            <ToolsButton>TypeScript</ToolsButton>
            <ToolsButton>Matlab</ToolsButton>
            <ToolsButton>C</ToolsButton>
            <ToolsButton>Tailwind CSS</ToolsButton>
            <ToolsButton>HTML/CSS</ToolsButton>
          </div>
        </div>
        {/* Tools Section */}
        <div className="flex-1 min-w-0">
          <div
            className="font-semibold text-left text-xl"
            style={{ color: "var(--text-quaternary)" }}
          >
            Tools
          </div>
          <div className="flex gap-4 justify-start flex-wrap mt-4">
            <ToolsButton>Visual Studio Code</ToolsButton>
            <ToolsButton>Git</ToolsButton>
            <ToolsButton>GitHub</ToolsButton>
            <ToolsButton>JavaFX</ToolsButton>
            <ToolsButton>Figma</ToolsButton>
            <ToolsButton>React</ToolsButton>
          </div>
        </div>
      </div>
    </div>
  );
}
