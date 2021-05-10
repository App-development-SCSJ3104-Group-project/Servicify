import React from "react";

const Tag = ({ tag }) => {
  return (
    <button
      style={{
        fontSize: "14px",
        borderRadius: "20px",
        height: "39px",
        width: "126px",
        backgroundColor: "#ff9e00",
        border: "none",
        marginRight: "5px",
      }}
    >
      {tag}
    </button>
  );
};

export default Tag;
