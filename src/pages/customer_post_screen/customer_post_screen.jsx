import React from "react";
import Nav from "./../../components/navbar/navbar";
import SearchArea from "./../../components/search_area/search_area";
import "./customer_post_scree.css";
import PostCard from "./../../components/post_card/post_card";

const CustomerPostScreen = () => {
  return (
    <div>
      <Nav isLogged={true} />
      <SearchArea route={"posts"} />
      <div className="posts-wrappper-background">
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default CustomerPostScreen;
