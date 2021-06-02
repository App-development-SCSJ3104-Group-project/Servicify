import React from "react";

const Avatar = (props) => {
  return (
    <div className="cirular-avatar">
      <img
        src={props.source}
        alt="circular avatar"
        width={props.width}
        height={props.height}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Avatar;
