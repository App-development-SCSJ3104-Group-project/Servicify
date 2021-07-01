import React, { Component, useState, useEffect } from "react";
import "./customer_view_post_screen.css";
import PostCard from "../../components/post_card/post_card";
import ProposalCard from "./compoents/proposalCard/proposalCard";
import { useSelector } from "react-redux";

const proposalsInfo = {
  sericeProviderUsername: "John Smith",
  proposalDay: "Friday",
  proposalDate: "12/05/2020",
  propsalTime: "9 a.m",
  proposalFess: "50.00$",
  proposalDescription:
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  proposedSteps: [
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  ],
};

const CustomerViewPost = (props) => {
  //
  const postsList = JSON.parse(localStorage.getItem("posts"));
  // const userId = JSON.parse(localStorage.getItem("user"));

  const userReducer = useSelector((state) => state.userReducer);

  const post = postsList.find((post) => post._id === props.match.params._id);

  return (
    <React.Fragment>
      <div className="posts-wrappper-background">
        {console.log(userReducer)}
        <PostCard post={post} actions={false} />
        <div className="post-ur-1-3"></div>
        <div className="proposals__ar_annoated">
          <div className="seperate_line__post_of_proposal-section"></div>
          <h3>Proposals</h3>
        </div>
        <ProposalCard
          {...proposalsInfo}
          useState={useState}
          proposalsInfo={proposalsInfo}
        />
        <ProposalCard
          {...proposalsInfo}
          useState={useState}
          proposalsInfo={proposalsInfo}
        />
      </div>
    </React.Fragment>
  );
};

export default CustomerViewPost;
