import React, { Component } from "react"
import DashboardTopBar from "../../components/dashboard_top_bar/dashboard_top_bar"
import ScreenTabs from "../../components/screen_tabs/screen_tabs"
import "./dashboard_manage_requests.scss"
import { connect } from "react-redux";
import "../../components/screen_tabs/screen_tabs.scss"
import Proposals from "./manage_proposals/manage_proposals"
import Requests from "./manage_request/manage_request"
import { acceptRequest, getServiceProviderRequest } from "../../redux/requests/requests_action";

class DashboardManageRequests extends Component {

    constructor({ props }) {
        super(props);
        this.props = props
    }
    tabs = [
        { name: "Proposals", status: true },
        { name: "requests", status: false },
    ]

    onclickFun = (event) => {


        const target = event.target.closest('.normal').classList.value.split(" ").filter(e => e === "active")

        if (target !== "active") {
            this.tabs.filter(e => e.status === true)[0].status = false
            this.tabs.filter(e => e.name === event.target.closest('.normal').dataset.name)[0].status = true

        }

        this.setState({})
    }
    componentDidMount() {
        const { getServiceProviderRequest } = this.props
        const data = JSON.parse(localStorage.getItem("user"))

        getServiceProviderRequest(data._id)
    }
    render() {

        const { acceptRequest, requests, loading } = this.props
        return (
            <div className="orders_m_body">
                <DashboardTopBar route={"manage requests"} />

                <div className="tabs_m">
                    <ScreenTabs tabs={this.tabs} callback={this.onclickFun} />
                </div>

                {this.tabs[0].status ? <Proposals /> : <Requests acceptRequest={acceptRequest} requests={requests} loading={loading} />}


            </div>
        )
    }
}

const mapStateToProps = ({ requestsReducer, usersReducer }) => {
    return {
        loading: requestsReducer.loading,
        requests: requestsReducer.requests,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getServiceProviderRequest: (id) => { dispatch(getServiceProviderRequest(id)) },
        acceptRequest: (id, customerId, status) => { dispatch(acceptRequest(id, customerId, status)) }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardManageRequests)