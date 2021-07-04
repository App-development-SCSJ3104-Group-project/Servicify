import React, { Component } from "react";
import ScreenTabs from "../../components/screen_tabs/screen_tabs";
import "./customer_manage_requests.scss";
import "../../components/screen_tabs/screen_tabs.scss";
import Proposals from "./manage_proposals/manage_proposals";
import Requests from "./manage_request/manage_request";
import { connect } from "react-redux";
import Template from "../../components/template/template";
import {
  cancelRequest,
  getRequest,
} from "../../redux/requests/requests_action";

class CustomerManageRequests extends Component {
  constructor({ props }) {
    super(props);
    this.props = props;
  }
  tabs = [
    { name: "requests", status: false },
    { name: "Proposals", status: true },
  ];

  componentDidMount() {
    const { getRequest } = this.props;
    const data = JSON.parse(localStorage.getItem("user"));

    getRequest(data._id);
  }
  onclickFun = (event) => {
    const target = event.target
      .closest(".normal")
      .classList.value.split(" ")
      .filter((e) => e === "active");

    if (target !== "active") {
      this.tabs.filter((e) => e.status === true)[0].status = false;
      this.tabs.filter(
        (e) => e.name === event.target.closest(".normal").dataset.name
      )[0].status = true;
    }

    this.setState({});
  };

  render() {
    const { loading, requests, cancelRequest } = this.props;
    return (
      <Template route="requests">
        <div className="orders_m_body">
          <div className="tabs_m">
            <ScreenTabs tabs={this.tabs} callback={this.onclickFun} />
          </div>

          {this.tabs[0].status ? (
            <Requests
              requests={requests}
              cancelRequest={cancelRequest}
              loading={loading} />
          ) : (
            <Proposals />
          )}
        </div>
      </Template>
    );
  }
}

const mapStateToProps = ({ requestsReducer, usersReducer }) => {
  return {
    loading: requestsReducer.loading,
    requests: requestsReducer.requests,
    // userId: usersReducer.userInAuth[0]._id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRequest: (id) => {
      dispatch(getRequest(id));
    },
    cancelRequest: (id, customerId) => {
      dispatch(cancelRequest(id, customerId));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerManageRequests);
