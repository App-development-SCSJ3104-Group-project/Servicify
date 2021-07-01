import React, { useState, useEffect } from "react";
import "./customer_post_scree.css";
import "./post_screen.scss";
import PostCard from "./../../components/post_card/post_card";
import PostCardForm from "./components/postCard/postCardForm";
import Template from "../../components/template/template";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/posts/posts_action";
import Zoom from "react-reveal/Zoom";

const CustomerPostScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // use selectors
  const postsList = useSelector((state) => state.posts);

  localStorage.setItem("posts", JSON.stringify(postsList));

  // get User from local storage
  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  return (
    <Template route="posts">
      <div>
        <div className="posts-wrappper-background">
          <PostCardForm useState={useState}></PostCardForm>
          {postsList?.map((post) => (
            <Zoom key={post._id}>
              <PostCard key={post._id} post={post} actions={true} />
            </Zoom>
          ))}
        </div>
      </div>
    </Template>
  );
};

export default CustomerPostScreen;
