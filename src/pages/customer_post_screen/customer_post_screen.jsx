import React from "react";
import Nav from "./../../components/navbar/navbar";
import SearchArea from "./../../components/search_area/search_area";
import "./customer_post_scree.css";

const CustomerPostScreen = () => {
  const tabs = [
    { name: "overview", isActive: false },
    { name: "services", isActive: false },
    { name: "posts", isActive: true },
    { name: "orders", isActive: false },
    { name: "favorites", isActive: false },
    { name: "requests", isActive: false },
    { name: "profile", isActive: false, lastTab: true },
  ];

  return (
    <div>
      <Nav isLogged={true} />
      <SearchArea tabs={tabs} />
      <div className="posts-wrappper-background">
        <div className="post-wrapper">
          <h1>post content</h1>
        </div>
      </div>
    </div>
  );
};

export default CustomerPostScreen;
