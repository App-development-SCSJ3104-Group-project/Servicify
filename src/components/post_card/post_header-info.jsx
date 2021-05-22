import React from "react";

const PostHeaderInfo = (props) => {
  return (
    <div className="service_provider__avatar__side__content-2">
      {props.icon}
      <span className="profile_infomration__side">{props.description}</span>
    </div>
  );
};

export default PostHeaderInfo;
