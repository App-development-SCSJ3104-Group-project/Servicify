import React from "react";
import profile from "../../images/landing_page/profile.jpeg";

const Avatar = () => {
  return (
    <div class="cirular-avatar">
      <img
        src={profile}
        alt="circular avatar"
        width="50px"
        height="50px"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
};

export default Avatar;
