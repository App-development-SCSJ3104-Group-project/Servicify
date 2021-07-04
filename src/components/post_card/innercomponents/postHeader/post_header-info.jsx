import React from "react";

const PostHeaderInfo = ({ description, icon }) => {
  return (
    <div className="post__header__text">
      {icon}
      <span className="profile_infomration__side">{description}</span>
    </div>
  );
};

export default PostHeaderInfo;
