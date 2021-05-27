import React, { Component } from "react"
import DashboardTopBar from "../../components/dashboard_top_bar/dashboard_top_bar"
import ScreenTabs from "../../components/screen_tabs/screen_tabs"
import DashboardCard from "../../components/dashboard_card/dashboard_card"
import "./dashboard_manage_orders.scss"
import icon_1 from "../../icons/car-service 1.svg"
import icon_2 from "../../icons/clipboard 1.svg"
import icon_3 from "../../icons/mechanic 1.svg"
import icon_4 from "../../icons/technical-support 1.svg"
import icon_5 from "../../icons/wrench 1.svg"

class DashboardManageOrders extends Component {

    constructor({ props }) {
        super(props);
        this.props = props
    }

    orderStatus = [
        { name: "On the way", icon: icon_1, status: true },
        { name: "Payment done", icon: icon_2, status: false },
        { name: "Fixing", icon: icon_5, status: false },
        { name: "Diagnosing", icon: icon_4, status: false },
        { name: "Done", icon: icon_3, status: false },
    ]
    render() {
        return (
            <div className="orders_m_body">
                <DashboardTopBar route={"manage orders"} />

                <div className="tabs_m">
                    <ScreenTabs />
                </div>

                {this.currentOrder()}


            </div>
        )
    }

    currentOrder = () => {

        return (

            <DashboardCard label={"current order"}>

                <div className="current_order_body">

                    <div className="current_order_status">
                        {
                            this.orderStatus.map(e => (

                                <div className={e.status ? "current_order_status_card active_card" : "current_order_status_card"}>
                                    <img src={e.icon} alt="" />
                                    <br />
                                    <h3>{e.name}</h3>
                                </div>
                            ))
                        }
                    </div>

                    <div className="current_order_grid">

                    </div>
                </div>

            </DashboardCard>


        )
    }
}
export default DashboardManageOrders