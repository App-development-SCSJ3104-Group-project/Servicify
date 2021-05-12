import React, { Component } from "react";
import Navbar from "./../../components/navbar/navbar";
import SearchArea from "./../../components/search_area/search_area";
import Overview from "./../../components/overview/overview";
import Categories from "./../../components/categories/categories";
import SearchResult from "./../../components/search_result/search_result";
import Footer from "../../components/footer/footer";

import "./landing_page.scss";
class LandingPage extends Component {
  render() {
    const tabs = [{ name: "overview", isActive: true }];

    return (
      <div className="landing-page">
        <Navbar isLogged={false} />
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

export default LandingPage;