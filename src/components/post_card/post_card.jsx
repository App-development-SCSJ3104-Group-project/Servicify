import React from "react";
import "./post_card.css";
import PostHeader from "./post-header";
import PostContent from "./post_content";
import PostFooter from "./post_footer";

const PostCard = () => {
  return (
    <div className="post-wrapper">
      <PostHeader />
      <PostContent />
      <PostFooter />
    </div>
  );
};

export default PostCard;
