import * as api from "./proposals";

export const getProposals = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProposals(id);

    dispatch({ type: "FETCH_PROPOSALS", payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
