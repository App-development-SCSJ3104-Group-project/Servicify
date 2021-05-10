import React, { Component } from "react";
import "./search_area.css";

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
          <p className="title">Browse Now!</p>
          <input
            type="text"
            className="search-input"
            placeholder="search for a service provider now"
          />
        </div>
        <div className="navbar-search">
          <div className="tab-1">
            <p className="overview">overview</p>
          </div>
          <div className="tab-2">
            <p>posts</p>
          </div>
          <div className="tab-3">
            <p>managment</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchArea;
