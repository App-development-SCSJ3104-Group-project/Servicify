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
        margin: "0px 3px 0px 0px",
      }}
    >
      {tag}
    </button>
  );
};

export default Tag;
