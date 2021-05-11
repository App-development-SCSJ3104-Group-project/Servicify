import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import SearchArea from "../../components/search_area/search_area";
import Overview from "../../components/overview/overview";
import Categories from "../../components/categories/categories";
import SearchResult from "../../components/search_result/search_result";
import Footer from "../../components/footer/footer";

import "./landing_page.scss";
class CustomerMain extends Component {
  render() {
    const tabs = [
      { name: "overview", isActive: true },
      { name: "services", isActive: false },
      { name: "posts", isActive: false },
      { name: "orders", isActive: false },
      { name: "favorites", isActive: false },
      { name: "requests", isActive: false },
      { name: "profile", isActive: false, lastTab: true },
    ];

    return (
      <div className="landing-page">
        <Navbar />
        <SearchArea tabs={tabs} />
        <Overview />
        <hr />
        <Categories />
        <hr />
        <SearchResult />
        <Footer />
      </div>
    );
  }
}

export default CustomerMain;
