import React, { Component } from "react"
import DashboardTopBar from "../../components/dashboard_top_bar/dashboard_top_bar"
import ScreenTabs from "../../components/screen_tabs/screen_tabs"
import "./dashboard_manage_orders.scss"
import "../../components/screen_tabs/screen_tabs.scss"
import icon_1 from "../../icons/car-service 1.svg"
import icon_2 from "../../icons/clipboard 1.svg"
import icon_3 from "../../icons/mechanic 1.svg"
import icon_4 from "../../icons/technical-support 1.svg"
import icon_5 from "../../icons/wrench 1.svg"
import CurrentOrder from "./current_order/current_order"
import OrdersHistory from "./orders_history/orders_history"

class DashboardManageOrders extends Component {

    constructor({ props }) {
        super(props);
        this.props = props
    }
    tabs = [
        { name: "status", status: true },
        { name: "Orderslist", status: false },
    ]

    onclickFun = (event) => {

        const target = event.target.classList.value.split(" ").filter(e => e == "active")

        if (target !== "active" && event.target.className !== "none") {
            this.tabs.filter(e => e.status === true)[0].status = false
            this.tabs.filter(e => e.name === event.target.dataset.name)[0].status = true

        }
        this.setState({})
    }

    orderStatus = [
        { name: "On the way", icon: icon_1, status: true },
        { name: "Payment done", icon: icon_2, status: false },
        { name: "Fixing", icon: icon_5, status: false },
        { name: "Diagnosing", icon: icon_4, status: false },
        { name: "Done", icon: icon_3, status: false },
    ]
    onOrderCardClicked = (event) => {

        const target = event.target.parentElement.classList.value.split(" ").filter(e => e === "active_card")

        if (target[0] !== "active_card") {
            this.orderStatus.filter((e) => e.status === true)[0].status = false
            this.orderStatus.filter((e) => e.name === event.target.parentElement.dataset.name)[0].status = true
            event.target.parentElement.classList.add("active_card")

        }
        console.log(this.orderStatus)
        this.setState({})
    }
    render() {
        return (
            <div className="orders_m_body">
                <DashboardTopBar route={"manage orders"} />

                <div className="tabs_m">
                    <ScreenTabs tabs={this.tabs} callback={this.onclickFun} />
                </div>

                {this.tabs[0].status ? <CurrentOrder orderStatus={this.orderStatus} callback={this.onOrderCardClicked} /> : <OrdersHistory />}


            </div>
        )
    }
}
export default DashboardManageOrders

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