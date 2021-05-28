import React, { Component } from "react"
import DashboardTopBar from "../../components/dashboard_top_bar/dashboard_top_bar"
import ScreenTabs from "../../components/screen_tabs/screen_tabs"
import DashboardCard from "../../components/dashboard_card/dashboard_card"
import Button from "../../components/button/button"
import Card from "../../components/card/card"
import IconButton from "../../components/icon/icon_component"
import "./dashboard_manage_orders.scss"
import "../../components/screen_tabs/screen_tabs.scss"

import profileIcon from "../../components/profile_card/Ellipse (3).svg";
import star from "./outline_star_black_24dp 1.svg";
import printIcon from "./outline_receipt_long_white_24dp 1.svg"
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

                {this.tabs[0].status ? this.currentOrder() : this.listOrders()}


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

                                <div className={e.status ? "current_order_status_card active_card" : "current_order_status_card"} data-name={e.name}>
                                    <img src={e.icon} alt="" onClick={this.onOrderCardClicked} />
                                    <br />
                                    <h3>{e.name}</h3>
                                </div>
                            ))
                        }
                    </div>

                    <div className="current_order_grid">

                        <div className="current_order_grid_con">

                            <div className="flex_in">
                                <h3>Client:</h3>
                                <input className="input" type="text" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Phone no:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Country:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>City:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Day:</h3>
                                <input className="input" type="number" readOnly />
                            </div>

                        </div>
                        <div className="current_order_grid_con">
                            <div className="flex_in">
                                <h3>Payment method:</h3>
                                <input className="input" type="text" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Site profit:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Time Range:</h3>
                                <input className="input" type="date" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Diagnosing fees:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Total Payment:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                        </div>

                    </div>
                    <div className="btn-cancel">

                        <Button innerText={"Cancel"}
                            margin="0.3rem"
                            color="white"
                            iconPosition='false'
                            backGroundColor="#1E2833"
                            width="10rem"
                            height="4rem"
                            borderRadius="2rem" />
                    </div>
                </div>

            </DashboardCard>


        )
    }

    listOrders = () => {
        return (
            <DashboardCard label={"Orders history"}>

                <div className="list_of_cards">
                    <Card width="40%" imgHeight="15.0rem" imgWidth="15.0rem" image_src={profileIcon} imgHsize="8rem" imgWsize="8rem">

                        <div className="order_header_card">
                            <div className="order_header_card_left">
                                <div className="part_one">
                                    <h3>John Smith</h3>
                                    <div className="rate_div">
                                        <h3>4.5</h3>
                                        <img src={star} alt="" />
                                    </div>
                                </div>
                                <h3>27 minutes ago / Johor Bahru / Cash</h3>
                            </div>
                            <div className="right_float_button">
                                <IconButton height="2.5rem" width="2.5rem" innerText={null} heightDiv="5.0rem" widthDiv="5.0rem"
                                    borderRadius="50%" backgroundColor="#1E2833" src={printIcon} />
                            </div>
                        </div>
                    </Card>
                </div>


            </DashboardCard>)
    }
}
export default DashboardManageOrders