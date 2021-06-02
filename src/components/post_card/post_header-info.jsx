import React from "react";

const PostHeaderInfo = ({ description, icon }) => {
  return (
    <div className="service_provider__avatar__side__content-2">
      {icon}
      <span className="profile_infomration__side">{description}</span>
    </div>
  );
};

export default PostHeaderInfo;
