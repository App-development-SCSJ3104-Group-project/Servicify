import React, { Component } from "react";
import SearchArea from "../../components/search_area/search_area";
import Overview from "../../components/overview/overview";
import Categories from "../../components/categories/categories";
import SearchResult from "../../components/search_result/search_result";
import Nav from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

import "./landing_page.scss";
class CustomerMain extends Component {
  render() {
    return (
      <div className="landing-page">
        <Nav isLogged={true} />
        <SearchArea route={"services"} />
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
