import React, { Component } from "react"
import NavigationTab from "../search_area/tab"
import profileImg from "../../icons/User2.svg"
import CircularAvatar from "../icon/icon_component"

import "./dashboard_top_bar.scss"

class DashboardTopBar extends Component {

    constructor ({ props }) {
        super(props);
        this.state = props
    }


    tabs = [
        { name: "overview", isActive: false, redirectTo: "/dashboard" },
        { name: "manage services", isActive: false },
        { name: "manage orders", isActive: false, redirectTo: "/dashboard_manage_orders" },
        { name: "manage requests", isActive: false, redirectTo: "/dashboard_manage_requests" },
    ];

    render() {

        this.tabs.find(e => e.name === this.props.route).isActive = true;
        return (
            <div className="dashboard-top-bar">

                <div className="dashboard-top-bar__info">
                    <div className="dashboard-top-bar__info__left">

                        <img className="dashboard-top-bar__info__left__img" src={profileImg} alt="" />
                        <div className="dashboard-top-bar__info__details">
                            <h1>John Williams</h1>
                            <h3>CEO Ma nager at google</h3>
                        </div>
                    </div>

                    <CircularAvatar height={"1.6rem"} width={"1.6rem"} innerText={"6.7"} src={null} heightDiv={"5rem"} widthDiv={"5rem"} backgroundColor={"#FC5130"} borderRadius={"50%"} />

                </div>


                <div className="dashboard-top-bar__tabs">
                    {this.tabs ? this.tabs.map((tab) => (
                        // @ts-ignore
                        <NavigationTab
                            currentTab={tab.isActive}
                            tabName={tab.name}
                            linkTo={tab.redirectTo}
                        />
                    )) : null}
                </div>
            </div>
        );
    }

}

export default DashboardTopBar