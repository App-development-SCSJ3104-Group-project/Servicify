import axios from "axios";

const url = `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/proposals/`;

export const fetchProposals = (id) =>
  axios({
    method: "GET", //you can set what request you want to be
    url: `${url}${id}`,
    data: null,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });

export const acceptProposal = (id) => axios.patch(`${url}${id}/accept`);

export const rejectProposal = (id) => axios.patch(`${url}${id}/reject`);
