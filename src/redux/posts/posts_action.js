import * as api from "./posts";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error) {
  }
};

export const createNewPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
  }
};

export const createNewProposal = (proposalInfo, _id) => async (dispatch) => {
  try {
    const { data } = await api.createProposal(proposalInfo, _id);

    dispatch({ type: "CREATE_PROPOSAL", payload: data });
  } catch (error) {
  }
};
