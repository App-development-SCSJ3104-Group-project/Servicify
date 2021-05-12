import React from "react";

const About = ({ desc }) => {
  return (
    <div
      style={{
        fontSize: "14px",
        margin: "7px 0px 6px 12px",
        padding: "9px 13px 9px 9px",
      }}
      className="profile-content"
    >
      <p>{desc}</p>
    </div>
  );
};

export default About;
