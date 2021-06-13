import React from "react";
import "./search_result.css";
import users from "./dummydata";
import Zoom from 'react-reveal/Zoom'
import UserResultCard from "./inner_components/ResultCard"

const SearchResult = () => {
  const filterSkills = [
    "Electrical",
    "Mechnical",
    "House Cleaning",
    "Pet care",
  ];

  return (
    <div className="search__result_container_a">
      <Zoom left>

        <div className="search__result_filter-section">
        <div className="filter-section_title">
          <p>Filters:</p>
        </div>
        <div className="filter-section_content-1">
          <p>Hourly Rate:</p>
        </div>
        <div className="filter-section_content-2">
          <input
            className="filter-section_content-2__input"
            placeholder="Min"
            type="text"
          />
          <input
            className="filter-section_content-2__input"
            placeholder="Max"
            type="text"
          />
        </div>
        <div className="filter-section_content-3">
          <p className="filter-section_content-3_skills">Skills:</p>
          {filterSkills.map((skill) => (
            <FilterSkills key={skill} skill={skill} />
          ))}
        </div>
      </div>
      </Zoom>
    <Zoom right>
      <div className="search__result_results-section">
        <div className="search__result_results-section-title">
          <p>Top Results:</p>
        </div>
        {users.map((user) => (
          <UserResultCard key={user.id} {...user} />
        ))}
        </div>
        </Zoom>
    </div>
  );
};



const FilterSkills = (props) => {
  return (
    <div className="skill_box-filter">
      <input type="checkbox" id="checkbox_filter-section" />
      <span className="skill_name">{props.skill}</span>
      <br />
    </div>
  );
};

export default SearchResult;
