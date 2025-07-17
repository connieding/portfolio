import ToolsButton from "../components/ToolsButton";
import ProjectCard from "../components/ProjectCard";

export default function WorksCardContent() {
  return (
    <div className="px-16 py-12">
      {/* showing some projects */}
      <div
        className="font-semibold text-left text-xl"
        style={{ color: "var(--text-quaternary)" }}
      >
        Projects
      </div>
      <div className="flex gap-8 justify-start flex-wrap mt-4 mb-4">
        <ProjectCard title="Proj 1" imgSrc="/images/p1.jpg" />
        <ProjectCard title="Proj 2" imgSrc="/images/p2.jpg" />
        <ProjectCard title="Proj 3" imgSrc="/images/p3.jpg" />
        <ProjectCard title="Proj 4" imgSrc="/images/p4.jpg" />
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
