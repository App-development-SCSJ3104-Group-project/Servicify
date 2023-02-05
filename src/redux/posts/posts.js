import axios from "axios";

const url = `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/posts`;

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
export const createProposal = (proposalInfo, _id) =>
  axios({
    method: "POST", //you can set what request you want to be
    url: url + "/" + _id,
    data: proposalInfo,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });

export const deletePost = (id) =>
  axios({
    method: "DELETE", //you can set what request you want to be
    url: `${url}/${id}`,
    data: null,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
