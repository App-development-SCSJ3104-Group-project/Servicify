import React, { Component, useState, useEffect } from "react";
import "./customer_view_post_screen.css";
import PostCard from "../../components/post_card/post_card";
import ProposalCard from "./compoents/proposalCard/proposalCard";
import { useDispatch, useSelector } from "react-redux";
import { getProposals } from "./../../redux/proposals/proposals_action";

const CustomerViewPost = (props) => {
  // dispatch an action
  const dispatch = useDispatch();

  // Fetch post from the local storage
  const postsList = JSON.parse(localStorage.getItem("posts"));
  const post = postsList.find((post) => post._id === props.match.params._id);

  useEffect(() => {
    dispatch(getProposals(props.match.params._id));
  }, [dispatch]);

  const proposalsList = useSelector((state) => state.proposals);
  //

  return (
    <React.Fragment>
      <div className="posts-wrappper-background">
        <PostCard post={post} actions={false} />
        <div className="post-ur-1-3"></div>
        <div className="proposals__ar_annoated">
          <div className="seperate_line__post_of_proposal-section"></div>
          <h3>Proposals</h3>
        </div>

        {proposalsList.map((proposalInfo, index) => (
          <ProposalCard
            key={index}
            {...proposalInfo}
            proposalsInfo={proposalInfo}
            useState={useState}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default CustomerViewPost;
