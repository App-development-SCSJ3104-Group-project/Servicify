import React from "react";

const About = ({ desc }) => {
  return (
    <div
      style={{ fontSize: "14px", paddingTop: "16px" }}
      class="profile-content"
    >
      <p>{desc}</p>
    </div>
  );
};

export default About;
