import React from "react";

const buttonStyle = {
  border: "2px solid #ccc",
  borderRadius: "8px",
  background: "none",
  padding: "8px 16px",
  cursor: "pointer",
  fontSize: "0.85rem",
  transition: "transform 0.15s",
};

const ToolsButton = ({ children, onClick, style, ...props }) => (
  <button
    onClick={onClick}
    style={{
      ...buttonStyle,
      padding: "6px 14px",
      borderRadius: "99px",
      ...style,
    }}
    className="tools-button"
    {...props}
  >
    {children}
  </button>
);

const styleTag = (
  <style>
    {`
            .tools-button:hover {
                transform: scale(1.07);
            }
        `}
  </style>
);

export default (props) => (
  <>
    {styleTag}
    <ToolsButton {...props} />
  </>
);
