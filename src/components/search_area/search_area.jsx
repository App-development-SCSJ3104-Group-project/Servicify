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
    { name: "overview", isActive: false },
    { name: "services", isActive: false },
    { name: "posts", isActive: false },
    { name: "orders", isActive: false },
    { name: "favorites", isActive: false },
    { name: "requests", isActive: false },
    { name: "profile", isActive: false, lastTab: true },
  ];
  render() {
    const {popUpToggle}=this.state;
    if (this.props.route !== undefined)
      this.tabs.find((e) => e.name == this.props.route).isActive = true;

    return (
      <div className="browse-area" >

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
        <div className="navbar-search">
          {this.tabs
            ? this.tabs.map((tab) => (
                <NavigationTab
                  key={tab.name}
                  currentTab={tab.isActive}
                  lastTab={tab.lastTab}
                  tabName={tab.name}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default SearchArea;
