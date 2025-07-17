import React from "react";
import ImageButton from "./ImageButton"; // Adjust the import path as necessary

const cardStyle: React.CSSProperties = {
  border: "2px solid #ccc",
  borderRadius: "16px",
  padding: "16px",
  cursor: "pointer",
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

const cardHoverStyleTag = (
  <style>
    {`
      .project-card {
        transition: transform 0.15s;
      }

      .project-card:hover {
        transform: scale(1.05);
      }
    `}
  </style>
);

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
    {cardHoverStyleTag}
    <div className="project-card" style={cardStyle} onClick={onClick}>
      <img src={imgSrc} alt={title} style={imageStyle} />
      <div style={titleRowStyle}>
        <div style={titleStyle}>{title}</div>
        {githubUrl && (
          <ImageButton
            src="/icons/github.svg"
            alt="GitHub"
            onClick={() => {
              window.open(githubUrl, "_blank");
            }}
            size={20}
          />
        )}
      </div>
    </div>
  </>
);

export default ProjectCard;
