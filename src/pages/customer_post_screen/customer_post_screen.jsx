import React, { useState, useEffect } from "react";
import "./customer_post_scree.css";
import "./post_screen.scss";
import PostCard from "./../../components/post_card/post_card";
import PostCardForm from "./components/postCard/postCardForm"
import posts from "./dummydate";
import Template from "../../components/template/template";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/posts/posts_action";
// import { useForm } from "react-hook-form";
import Zoom from 'react-reveal/Zoom'

const CustomerPostScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // use selectors
  const postsList = useSelector((state) => state.posts);
  console.log(postsList);

  return (
    <Template route="posts">
      <div>
          <div className="posts-wrappper-background">
          <PostCardForm useState={useState}></PostCardForm>
            {posts.map((post) => (
        <Zoom>
            
              <PostCard key={post.id} post={post} />
        </Zoom>
              
          ))}
        </div>
      </div>
    </Template>
  );
};



export default CustomerPostScreen;

// const mapStateToProps = (state) => {
//   return {
//     name: state.main.posts
//   }
// }

// const mapDispatchToProps = (dispatch) => {

//   return {
//     // import action from //???? action file
//     // import { getPosts } from './../../redux/posts/posts_action';
// addPost: (id) => {
//   dispatch(addPost(id));
// };

//   }
// }
// export default connect(mapStateToProps)(CustomerMain)
