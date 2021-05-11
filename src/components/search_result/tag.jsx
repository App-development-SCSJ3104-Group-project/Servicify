import React from "react";

const Tag = ({ tag }) => {
  return (
    <button
      style={{
        fontSize: "14px",
        borderRadius: "20px",
        height: "39px",
        width: "126px",
        backgroundColor: "rgba(255, 158, 0, 0.44)",
        border: "none",
        marginRight: "5px",
      }}
    >
      {tag}
    </button>
  );
};

export default Tag;
