import React from "react";

const PostContent = ({ description }) => {
  return (
    <div className="post-content__description_box">
      <p>{description}</p>
    </div>
  );
};

export default PostContent;
