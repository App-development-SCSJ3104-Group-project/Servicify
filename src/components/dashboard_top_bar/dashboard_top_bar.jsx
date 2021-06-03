import React, { Component } from "react"
import NavigationTab from "../search_area/tab"
import profileImg from "../../icons/User2.svg"
import CircularAvatar from "../icon/icon_component"

import "./dashboard_top_bar.scss"

class DashboardTopBar extends Component {

    constructor({ props }) {
        super(props);
        this.state = props
    }

    tabs = [
        { name: "overview", isActive: false },
        { name: "manage services", isActive: false },
        { name: "manage orders", isActive: false },
        { name: "manage requests", isActive: false, },
    ];

    render() {

        this.tabs.find(e => e.name == this.props.route).isActive = true;
        return (
            <div className="overview_header">

                <div className="overview_information">
                    <div className="left_info">

                        <img src={profileImg} alt="" />
                        <div className="overview_information_details">
                            <h1>John Williams</h1>
                            <h3>CEO Ma nager at google</h3>
                        </div>
                    </div>

                    <CircularAvatar height={"1.6rem"} width={"1.6rem"} innerText={"6.7"} src={null} heightDiv={"5rem"} widthDiv={"5rem"} backgroundColor={"#FC5130"} borderRadius={"50%"} />

                </div>


                <div className="overview_tabs">
                    {this.tabs ? this.tabs.map((tab) => (
                        <NavigationTab
                            currentTab={tab.isActive}
                            tabName={tab.name}
                        />
                    )) : null}
                </div>
            </div>
        );
    }

}

export default DashboardTopBar