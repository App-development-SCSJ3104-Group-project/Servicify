import axios from "axios";
import { ordersActionType } from "./orders_action_type";

export const storeData = (data) => ({
  type: ordersActionType.loadOrders,
  data: data,
});

export const setLoading = (value) => ({
  type: ordersActionType.SET_LOADING,
  value,
});

export const setStatus = (id) => {
  return (dispatch) => {
    setLoading(true);
    axios
      .patch(`${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/orders/` + id, {
        status: "Done",
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        const errorMsg = err.message;
      });
  };
};

export const loadData = (id) => {
  setLoading(true);
  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/orders/?id=` + id,
        +"&type=false"
      )
      .then((res) => {
        const data = res.data;
        return dispatch(storeData(data));
        setLoading(false);
      })
      .catch((err) => {
        const errorMsg = err.message;
      });
  };
};

export const loadDashboardData = (id) => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/orders/?id=` +
          id +
          "&type=true"
      )
      .then((res) => {
        const data = res.data;
        return dispatch(storeData(data));
      })
      .catch((err) => {
        const errorMsg = err.message;
      });
  };
};

export const giveFeedback = (id, description, rate) => {
  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_SERVICIFY_API_ENDPOINT}/orders/add_feedback/` +
          id,
        { feedback: description, rate: rate }
      )
      .then((res) => {
        const currentUser = JSON.parse(localStorage.getItem("user"));

        dispatch(loadData(currentUser._id));
      })
      .catch((err) => err.message);
  };
};
