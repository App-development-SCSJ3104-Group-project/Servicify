import React, { Component } from "react"
import DashboardTopBar from "../../components/dashboard_top_bar/dashboard_top_bar"
import ScreenTabs from "../../components/screen_tabs/screen_tabs"
import "./dashboard_manage_orders.scss"


class DashboardManageOrders extends Component {

    render() {
        return (
            <div className="orders_m_body">
                <DashboardTopBar route={"manage orders"} />

                <div className="tabs_m">
                    <ScreenTabs />
                </div>


            </div>
        )
    }
}
export default DashboardManageOrders