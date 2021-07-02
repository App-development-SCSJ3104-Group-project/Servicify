import * as api from "./proposals";

export const getProposals = (_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProposals(_id);

    dispatch({ type: "FETCH_PROPOSALS", payload: data });
  } catch (err) {
    console.log(err);
  }
};
