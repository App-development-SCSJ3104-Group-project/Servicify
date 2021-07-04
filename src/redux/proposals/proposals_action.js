import * as api from "./proposals";

export const getProposals = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProposals(id);

    dispatch({ type: "FETCH_PROPOSALS", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const acceptAProposal = (id) => async (dispatch) => {
  try {
    const { data } = await api.acceptProposal(id);

    dispatch({ type: "ACCEPT_PROPOSAL", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const rejectAProposal = (id) => async (dispatch) => {
  try {
    const { data } = await api.rejectProposal(id);

    dispatch({ type: "REJECT_PROPOSAL", payload: data });
  } catch (err) {
    console.log(err);
  }
};
