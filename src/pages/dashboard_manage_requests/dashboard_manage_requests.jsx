import React, { Component } from "react"
import DashboardTopBar from "../../components/dashboard_top_bar/dashboard_top_bar"
import ScreenTabs from "../../components/screen_tabs/screen_tabs"
import "./dashboard_manage_requests.scss"
import "../../components/screen_tabs/screen_tabs.scss"
import Proposals from "./manage_proposals/manage_proposals"
import Requests from "./manage_request/manage_request"

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


        const target = event.target.closest('.normal').classList.value.split(" ").filter(e => e == "active")

        if (target !== "active") {
            this.tabs.filter(e => e.status === true)[0].status = false
            this.tabs.filter(e => e.name === event.target.closest('.normal').dataset.name)[0].status = true

        }
        this.setState({})
    }

    render() {
        return (
            <div className="orders_m_body">
                <DashboardTopBar route={"manage requests"} />

                <div className="tabs_m">
                    <ScreenTabs tabs={this.tabs} callback={this.onclickFun} />
                </div>

                {this.tabs[0].status ? <Proposals /> : <Requests />}


            </div>
        )
    }
}
export default DashboardManageRequests

// const mapStateToProps = (state) => {
//     return {
//       name: state.main.posts
//     }
//   }

//   const mapDispatchToProps = (dispatch) => {

//     return {
//       // import action from //???? action file
//       // addPost: (id) => { dispatch(addPost(id)) }

//     }
//   }
//   export default connect(mapStateToProps)(CustomerMain)