import React, { Component } from "react";
import "./search_area.css";
import NavigationTab from "./../navbar/tab";

class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="browse-area">
        <div className="title-search"></div>
        <div className="user-search">
          <p className="title">Browse</p>
          <input
            type="text"
            className="search-input"
            placeholder="search for a service provider now"
          />
        </div>
        <div className="navbar-search">
          <NavigationTab
            currentTab={true}
            lastTab={false}
            tabName={"overview"}
          />
          <NavigationTab
            currentTab={false}
            lastTab={false}
            tabName={"services"}
          />
          <NavigationTab currentTab={false} lastTab={false} tabName={"posts"} />
          <NavigationTab
            currentTab={false}
            lastTab={false}
            tabName={"orders"}
          />
          <NavigationTab
            currentTab={false}
            lastTab={false}
            tabName={"favorite"}
          />
          <NavigationTab
            currentTab={false}
            lastTab={false}
            tabName={"requests"}
          />
          <NavigationTab
            currentTab={false}
            lastTab={true}
            tabName={"profile"}
          />
        </div>
      </div>
    );
  }
}

export default SearchArea;
