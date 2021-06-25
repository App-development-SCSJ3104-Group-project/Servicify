import React, { useState, useEffect } from "react";
import "./customer_post_scree.css";
import "./post_screen.scss";
import PostCard from "./../../components/post_card/post_card";
import PostCardForm from "./components/postCard/postCardForm";
import posts from "./dummydate";
import Template from "../../components/template/template";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/posts/posts_action";
// import { useForm } from "react-hook-form";
import Zoom from "react-reveal/Zoom";

const CustomerPostScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // use selectors
  const postsList = useSelector((state) => state.posts);

  return (
    <Template route="posts">
      <div>
        <div className="posts-wrappper-background">
          <PostCardForm useState={useState}></PostCardForm>
          {postsList.map((post) => (
            <Zoom key={post._id}>
              <PostCard key={post._id} post={post} />
            </Zoom>
          ))}
        </div>
      </div>
    </Template>
  );
};

export default CustomerPostScreen;
