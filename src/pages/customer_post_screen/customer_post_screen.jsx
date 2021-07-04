import React, { useState, useEffect } from "react";
import "./customer_post_scree.css";
import "./post_screen.scss";
import PostCard from "./../../components/post_card/post_card";
import PostCardForm from "./components/postCard/postCardForm";
import Template from "../../components/template/template";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/posts/posts_action";
import Zoom from "react-reveal/Zoom";
import NotifyBill from "./svg/notification_icon";

const CustomerPostScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // use selectors
  // @ts-ignore
  const postsList = useSelector((state) => state.posts);

  localStorage.setItem("posts", JSON.stringify(postsList));

  // getting userData whether it is service provider or customer
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <Template route="posts">
      <div>
        <div className="posts-wrappper-background">
          <PostCardForm useState={useState}></PostCardForm>
          {postsList.length === 0 ? (
            <div
              style={{
                fontSize: "24px",
                textAlign: "center",
                padding: "20px",
                marginTop: "10px",
              }}
            >
              <NotifyBill /> <br /> <br /> <br />
              Sorry, no post is Available yet
            </div>
          ) : (
            postsList?.map((post) => (
              <Zoom key={post._id}>
                <PostCard key={post._id} post={post} />
              </Zoom>
            ))
          )}
        </div>
      </div>
    </Template>
  );
};

export default CustomerPostScreen;
