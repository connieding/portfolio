import React from "react";

const cardStyle = {
  border: "2px solid #ccc",
  borderRadius: "16px",
  padding: "16px",
  cursor: "pointer",
  transition: "transform 0.15s",
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
  textAlign: "center",
  width: "280px",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: "16/9",
  objectFit: "cover",
  borderRadius: "12px",
  marginBottom: "12px",
};

const titleRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  justifyContent: "center",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 600,
  color: "#222",
};

const githubIconStyle: React.CSSProperties = {
  width: "20px",
  height: "20px",
};

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  githubUrl?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgSrc,
  githubUrl,
  onClick,
}) => (
  <>
    <style>
      {`
        .project-card:hover {
          transform: scale(1.05);
          border-color: #888;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
      `}
    </style>
    <div
      className="project-card"
      style={cardStyle as React.CSSProperties}
      onClick={onClick}
    >
      <img src={imgSrc} alt={title} style={imageStyle} />
      <div style={titleRowStyle}>
        <div style={titleStyle}>{title}</div>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" style={githubIconStyle} />
          </a>
        )}
      </div>
    </div>
  </>
);

export default ProjectCard;
