import React, { useState, useEffect } from "react";
import "./customer_post_scree.css";
import "./post_screen.scss";
import PostCard from "./../../components/post_card/post_card";
import PostCardForm from "./components/postCard/postCardForm";
import Template from "../../components/template/template";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/posts/posts_action";
// import { useForm } from "react-hook-form";
import Zoom from "react-reveal/Zoom";
// import usersReducer from './../../redux/users/users_reducer';

const CustomerPostScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // use selectors
  const postsList = useSelector((state) => state.posts);

  localStorage.setItem("posts", JSON.stringify(postsList));

  // const user = useSelector((state) => state.usersReducer);

  // const user = JSON.parse(localStorage.getItem("usersReducer"));
  // console.log(user);

  return (
    <Template route="posts">
      <div>
        <div className="posts-wrappper-background">
          <PostCardForm useState={useState}></PostCardForm>
          {postsList.map((post) => (
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
