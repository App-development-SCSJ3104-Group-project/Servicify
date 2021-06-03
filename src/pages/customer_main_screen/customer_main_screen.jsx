import React, { Component } from "react";
import SearchArea from "../../components/search_area/search_area";
import Overview from "../../components/overview/overview";
import Categories from "../../components/categories/categories";
import SearchResult from "../../components/search_result/search_result";
import Template from "../../components/template/template"

import "./landing_page.scss";
class CustomerMain extends Component {
  render() {
    return (
      <Template>

        <div className="landing-page">
          <Overview />
          <hr />
          <Categories />
          <hr />
          <SearchResult />
        </div>

      </Template>
    );
  }
}

export default CustomerMain;
