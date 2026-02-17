import React, { useState } from "react";
import ImageButton from "./ImageButton"; // Adjust import path if needed

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
        position: relative;
      }

      .project-card:hover {
        transform: scale(1.05);
      }

      .project-description {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 12px;
        border-radius: 12px;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        pointer-events: none;
      }

      /* Hover only on devices that support hover */
      @media (hover: hover) and (pointer: fine) {
        .project-card:hover .project-description {
          opacity: 1;
          pointer-events: auto;
        }
      }

      /* When 'active' class is added, always show description */
      .project-card.active .project-description {
        opacity: 1 !important;
        pointer-events: auto !important;
      }
    `}
  </style>
);

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  githubUrl?: string;
  description: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgSrc,
  githubUrl,
  description,
}) => {
  const [active, setActive] = useState(false);

  const handleToggleDescription = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".github-button")) return;

    setActive((prev) => !prev);
  };

  return (
    <>
      {cardHoverStyleTag}
      <div
        className={`project-card${active ? " active" : ""}`}
        style={cardStyle}
        onClick={handleToggleDescription}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            marginBottom: "12px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img src={imgSrc} alt={title} style={imageStyle} />
          <div className="project-description">{description}</div>
        </div>
        <div style={titleRowStyle}>
          <div style={titleStyle}>{title}</div>
          {githubUrl && (
            <div className="github-button">
              <ImageButton
                src="/icons/github.svg"
                alt="GitHub"
                onClick={() => {
                  window.open(githubUrl, "_blank");
                }}
                size={20}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
