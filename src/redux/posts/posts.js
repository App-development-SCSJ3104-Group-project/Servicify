import axios from "axios";

const url = "https://service-backend-web.herokuapp.com/posts";

export const fetchPosts = () =>
  axios({
    method: "GET", //you can set what request you want to be
    url: url,
    data: null,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });

export const createPost = (newPost) => axios.post(url, newPost);
