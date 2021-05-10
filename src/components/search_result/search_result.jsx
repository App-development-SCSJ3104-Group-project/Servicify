import React from "react";
import "./search_result.css";
import FilterIcon from "./filtericon";
import FilterForm from "./form";
import FilterCategory from "./filtercategory";
import Card from "./card";

const SearchResult = () => {
  return (
    <div className="row search-section">
      <div className="col-md-3 filter-section">
        <FilterIcon />
        <span>Filters:</span>
        <hr />
        <div className="divided-section">
          <FilterForm type="Min:" placeholder="0.00$" />
          <FilterForm type="Max:" placeholder="0.00$" />
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
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SearchResult;
