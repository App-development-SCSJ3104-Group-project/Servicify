import axios from "axios";

const url = "https://service-backend-web.herokuapp.com/proposals";

export const fetchProposals = (_id) =>
  axios({
    method: "GET", //you can set what request you want to be
    url: `${url} + '/' +${_id}`,
    data: null,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
