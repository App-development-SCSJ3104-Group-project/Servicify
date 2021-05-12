import React, { Component } from "react";
import "./search_area.css";
import NavigationTab from "./tab";

class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tabs } = this.props;

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
          {tabs?tabs.map((tab) => (
            <NavigationTab
              currentTab={tab.isActive}
              lastTab={tab.lastTab}
              tabName={tab.name}
            />
          )):null}
        </div>
      </div>
    );
  }
}

export default SearchArea;
