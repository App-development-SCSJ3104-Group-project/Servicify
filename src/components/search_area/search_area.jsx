import React, { Component } from "react";
import "./search_area.scss";
import NavigationTab from "./components/tab/tab";
import SearchPopUp from "./components/popup/PopUp";
import { connect } from "react-redux";
import searchIcon from "../../icons/search.svg"

import axios from "axios";

class SearchArea extends Component {
  constructor (props) {
    super(props);
    this.state = {
      popUpToggle: false,
      searchValue: null,
      serviceProviderArray: null
    };
  }

  handleSearchInput = (e) => {
    this.setState({ searchValue: e.target.value })

  }

  fetchSearchResult = async () => {
    const { searchValue } = this.state;
    let url = `https://servicify-service-web.onrender.com/users/serviceprovider?fullName=${searchValue}`

    const serviceProviderArray = await axios.get(url);
    this.setState({ serviceProviderArray, popUpToggle: true }, () => console.log(this.state))

  };


  tabs = [
    { name: "overview", isActive: false, linkTo: "", needsAuth: false },
    {
      name: "services",
      isActive: false,
      linkTo: "/customer_service_main_page",
      needsAuth: false,
    },
    {
      name: "posts",
      isActive: false,
      linkTo: "/customer_post_screen",
      needsAuth: true,
    },
    {
      name: "orders",
      isActive: false,
      linkTo: "/customer_orders_screen",
      needsAuth: true,
    },
    {
      name: "requests",
      isActive: false,
      linkTo: "/customer_manage_requests",
      needsAuth: true,
    },
    {
      name: "profile",
      isActive: false,
      linkTo: "/customer_profile/" + JSON.parse(localStorage.getItem("user"))?._id,
      lastTab: true,
      needsAuth: true,
    },
    localStorage.getItem("isServiceProvider") === "true"
      ? {
        name: "Dashboard",
        isActive: false,
        linkTo: "/dashboard",
        lastTab: true,
        needsAuth: true,
      }
      : {},
  ];
  render() {
    const { popUpToggle } = this.state;
    const tabsToBeRendered = this.tabs.filter((tab) => {
      if (tab.needsAuth === false) {
        return tab;
      }
      if (tab.needsAuth === true && localStorage.length != 0) {
        return tab;
      }
    });
    if (this.props.route !== undefined)
      this.tabs.find((e) => e.name === this.props.route).isActive = true;

    return (
      <div className={`browse-area } `} onClick={(e) => this.setState({ popUpToggle: false })}>
        {popUpToggle ? <SearchPopUp response={this.state.serviceProviderArray}></SearchPopUp> : null}
        <div className="browse-area__title-search"></div>
        <div className="browse-area__user-search">
          <img src={searchIcon} className="browse-area__icon" onClick={this.fetchSearchResult}></img>

          <p className="browse-area__title">Browse</p>
          <input
            type="text"
            className="browse-area__search-input"
            placeholder="search for a service provider now"
            onChange={(e) => this.handleSearchInput(e)}

          />
        </div>
        <div className="browse-area__tabs ">
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
    userInAuth: usersReducer.userInAuth,
  };
};
export default connect(mapStateToProps)(SearchArea);
