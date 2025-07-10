import ToolsButton from '../components/ToolsButton';

export default function WorksCardContent() {
  return (
      <div className="px-16 py-12">
        {/* showing some projects */}
        <div className="font-semibold text-left text-xl" style={{ color: 'var(--text-quaternary)' }}>
          Projects

       </div>

        <div className="flex flex-row gap-16">
          {/* Languages Section */}
          <div className="flex-1 min-w-0">
        <div className="font-semibold text-left text-xl" style={{ color: 'var(--text-quaternary)' }}>
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
            <div className="font-semibold text-left text-xl" style={{ color: 'var(--text-quaternary)' }}>
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
