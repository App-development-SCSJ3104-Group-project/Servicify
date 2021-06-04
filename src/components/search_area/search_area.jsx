import React, { Component } from "react";
import "./search_area.css";
import NavigationTab from "./tab";
import SearchPopUp from "./components/innerPopUp/PopUp"

class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {

      popUpToggle:false
    };
  }
  tabs = [
    { name: "overview", isActive: false,linkTo:"" },
    { name: "services", isActive: false,linkTo:"/customer_service_main_page" },
    { name: "posts", isActive: false },
    { name: "orders", isActive: false,linkTo:"/customer_orders_screen" },
    { name: "favorites", isActive: false },
    { name: "requests", isActive: false,linkTo:"/dashboard_manage_requests" },
    { name: "profile", isActive: false,linkTo:"/dashboard", lastTab: true },
  ];
  render() {
    const {popUpToggle}=this.state;
    if (this.props.route !== undefined)
      this.tabs.find(e => e.name == this.props.route).isActive = true;

    return (
      <div className={`browse-area } `} >

        {popUpToggle?<SearchPopUp></SearchPopUp>:null}
        <div className="title-search"></div>
        <div className="user-search">
          <p className="title">Browse</p>
          <input
            type="text"
            className="search-input"
            placeholder="search for a service provider now"
            onClick={()=>{

              this.setState({

                popUpToggle:!popUpToggle
              })
            }}
          />
        </div>
        <div className="navbar-search ">
          {this.tabs
            ? this.tabs.map((tab) => (
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

export default SearchArea;
