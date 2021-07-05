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
import { connect } from "react-redux";
import { loadDashboardData, setStatus } from "../../redux/orders/orders_action";

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

        const target = event.target.closest('.normal').classList.value.split(" ").filter(e => e === "active")

        if (target !== "active") {
            this.tabs.filter(e => e.status === true)[0].status = false
            this.tabs.filter(e => e.name === event.target.closest('.normal').dataset.name)[0].status = true

        }
        this.setState({})
    }

    componentWillMount() {

        const data = JSON.parse(localStorage.getItem("user"));

        const { loadDashboardData } = this.props

        loadDashboardData(data._id)
    }

    onOrderCardClicked = (event) => {

        const target = event.target.parentElement.classList.value.split(" ").filter(e => e === "active_card")

        if (target[0] !== "active_card") {
            this.orderStatus.filter((e) => e.status === true)[0].status = false
            this.orderStatus.filter((e) => e.name === event.target.parentElement.dataset.name)[0].status = true
            event.target.parentElement.classList.add("active_card")

        }
        this.setState({})
    }

    render() {
        const { ordersList, loading } = this.props

        return (
            loading ? (
                <div className="loading-div">
                    <div className="loader">Loading...</div>
                </div>
            ) :
                <div className="orders_m_body">
                    <DashboardTopBar route={"manage orders"} />

                    <div className="tabs_m">
                        <ScreenTabs tabs={this.tabs} callback={this.onclickFun} />
                    </div>


                    {this.tabs[0].status ? <CurrentOrder ordersList={ordersList} callback={this.onOrderCardClicked} /> : <OrdersHistory ordersList={ordersList} />}


                </div>
        )
    }
}

const mapStateToProps = ({ ordersReducer, usersReducer }) => {
    return {
        ordersList: ordersReducer.ordersList,
        loading: ordersReducer.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadDashboardData: (id) => { dispatch(loadDashboardData(id)) },
        setStatus: (id, status) => { dispatch(setStatus(id, status)) },
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardManageOrders);


