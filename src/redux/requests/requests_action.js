import axios from "axios";
import { RequestsActionType } from "./request_action_type";
export const makeRequest = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    const req = {
      customerId: data.customerId,
      serviceProviderId: data.serviceProviderId,
      description: data.description,
      fees: data.fees,
      payment: data.payment,
      location: data.location,
    };

    axios
      .post(
        `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/requests/create`,
        req
      )
      .then((res) => {
        dispatch(setLoading(false));
      });
  };
};
export const setLoading = (value) => ({
  type: RequestsActionType.SET_LOADING,
  value,
});

export const setRequest = (value) => ({
  type: RequestsActionType.GET_REQUESTS,
  value,
});

export const setProposal = (value) => ({
  type: RequestsActionType.GET_PROPSALS,
  value,
});

export const getRequest = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    axios
      .get(
        `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/requests/?id=` +
          id +
          "&type=false"
      )
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(setRequest(res.data));
      });
  };
};
export const getServiceProviderRequest = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    axios
      .get(
        `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/requests/?id=` +
          id +
          "&type=true"
      )
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(setRequest(res.data));
      });
  };
};

export const getServiceProviderProposals = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    axios
      .get(
        `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/proposals/` +
          id +
          "/true"
      )
      .then((res) => {
        dispatch(setProposal(res.data));
      });
  };
};

export const cancelRequest = (id, customerId) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    axios
      .patch(`${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/requests/` + id, {
        status: "Canceled",
      })
      .then((res) => {
        getRequest(customerId);
        dispatch(setLoading(false));
      });
  };
};
export const acceptRequest = (id, customerId, status) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    // axios
    //   .patch("http://localhost:5000/requests/" + id, { status: status })
    //   .then((res) => {
    axios
      .patch(`${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/requests/` + id, {
        status: status,
      })
      .then((res) => {
        getServiceProviderRequest(customerId);
        dispatch(setLoading(false));
      });
  };
};
export const cancelProposal = (id, customerId) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .patch(
        `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/proposals/` +
          id +
          "/cancel"
      )
      .then((res) => {
        getServiceProviderProposals(customerId);
      });
  };
};
