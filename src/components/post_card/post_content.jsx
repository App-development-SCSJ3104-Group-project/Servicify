import React from "react";

const PostContent = ({ postDesc }) => {
  return (
    <div className="post-content__description_box">
      <p>{postDesc}</p>
    </div>
  );
};

export default PostContent;
