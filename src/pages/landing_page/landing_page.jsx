import React, { Component } from "react";
import Navbar from "./../../components/navbar/navbar";
import SearchArea from "./../../components/search_area/search_area";
import Overview from "./../../components/overview/overview";
import Categories from "./../../components/categories/categories";
import SearchResult from "./../../components/search_result/search_result";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchArea />
        <Overview />
        <hr />
        <Categories />
        <hr />
        <SearchResult />
      </div>
    );
  }
}

export default LandingPage;
