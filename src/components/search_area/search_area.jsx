import React, { Component } from "react";
import "./search_area.css";
import NavigationTab from "./tab";
import SearchPopUp from "./components/innerPopUp/PopUp"

import { connect } from "react-redux"
class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {

      popUpToggle: false
    };
  }
  tabs = [
    { name: "overview", isActive: false, linkTo: "", needsAuth: false },
    { name: "services", isActive: false, linkTo: "/customer_service_main_page", needsAuth: false },
    { name: "posts", isActive: false, needsAuth: true },
    { name: "orders", isActive: false, linkTo: "/customer_orders_screen", needsAuth: true },
    { name: "favorites", isActive: false, needsAuth: true },
    { name: "requests", isActive: false, linkTo: "/customer_manage_requests", needsAuth: true },
    { name: "profile", isActive: false, linkTo: "/dashboard", lastTab: true, needsAuth: true },
    localStorage.getItem("isServiceProvider") ?? { name: "Dashboard", isActive: false, linkTo: "/dashboard", lastTab: true, needsAuth: true }
  ];
  render() {
    const { popUpToggle } = this.state;
    const { userInAuth } = this.props;
    const tabsToBeRendered = this.tabs.filter((tab) => {

      if (tab.needsAuth == false) {
        return tab;
      }
      if (tab.needsAuth == true && localStorage.length != 0) {
        return tab
      }
    })
    if (this.props.route !== undefined)
      this.tabs.find(e => e.name == this.props.route).isActive = true;

    return (
      <div className={`browse-area } `} >

        {popUpToggle ? <SearchPopUp></SearchPopUp> : null}
        <div className="title-search"></div>
        <div className="user-search">
          <p className="title">Browse</p>
          <input
            type="text"
            className="search-input"
            placeholder="search for a service provider now"
            onClick={() => {

              this.setState({

                popUpToggle: !popUpToggle
              })
            }}
          />
        </div>
        <div className="navbar-search ">
          {tabsToBeRendered
            ? tabsToBeRendered.map((tab) => (
              <NavigationTab

                currentTab={tab.isActive}
                lastTab={tab.lastTab}
                tabName={tab.name}
                linkTo={tab.linkTo}
              />
            ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {

  return {
    userInAuth: usersReducer.userInAuth
  }
}
export default connect(mapStateToProps)(SearchArea);
