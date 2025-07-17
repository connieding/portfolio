import React from "react";

const cardStyle = {
  border: "2px solid #ccc",
  borderRadius: "16px",
  padding: "16px",
  width: "280px",
  cursor: "pointer",
  transition: "transform 0.15s",
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
  textAlign: "center",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "12px",
  marginBottom: "12px",
};

const titleStyle = {
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "#222",
};

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgSrc,
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
      <div style={titleStyle}>{title}</div>
    </div>
  </>
);

export default ProjectCard;
