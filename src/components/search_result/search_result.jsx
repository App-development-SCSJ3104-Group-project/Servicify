import React from "react";
import "./search_result.css";
import FilterForm from "./form";
import FilterCategory from "./filtercategory";
import Card from "./card";

const SearchResult = () => {
  return (
    <div className="row search-section">
      <div className="col-md-3 filter-section">
        <p className="filter">Filters: </p>
        <hr />
        <p className="filter">Price: </p>
        <div className="arranged-forms">
          <FilterForm placeholder="Min" />
          <p className="m-2">To</p>
          <FilterForm placeholder="Max" />
        </div>
        <ul className="category-list">
          <FilterCategory categoryName="Plumbing" />
          <FilterCategory categoryName="House cleaning" />
          <FilterCategory categoryName="Pet care" />
          <FilterCategory categoryName="Farming" />
          <FilterCategory categoryName="Planting" />
        </ul>
      </div>
      <div className="col-md-8 result-section">
        <div className="search-result-top">
          <div className="result-title">
            <p>Top Results:</p>
          </div>
          <div className="page-number">
            <p>1-20 page</p>
          </div>
        </div>
        <hr />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SearchResult;
