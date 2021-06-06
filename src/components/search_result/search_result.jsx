import React from "react";
import "./search_result.css";
import Avatar from "./avatar";
import StarIcon from "./inner_components/star";
import Tag from "./tag";
import users from "./dummydata";

const SearchResult = () => {
  const filterSkills = [
    "Electrical",
    "Mechnical",
    "House Cleaning",
    "Pet care",
  ];

  return (
    <div className="search__result_container_a">
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
      <div className="search__result_results-section">
        <div className="search__result_results-section-title">
          <p>Top Results:</p>
        </div>
        {users.map((user) => (
          <UserResultCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

const UserResultCard = (user) => {
  return (
    <div className="search__result_card_container">
      <div className="search__result_card_header">
        <div className="search__result_card_header-left-section">
          <Avatar
            source={
              "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
            }
            width={"80px"}
            height={"80px"}
          />
          <div className="search__result_card_header-sub-section">
            <span>
              {user.userLocation}, {user.userCity} @{user.username}
            </span>
            <div className="search__result_card_header-sub-section-stars">
              {user.userRate.map((star) => (
                <StarIcon key={star} color={star && "#E5A800"} />
              ))}
            </div>
          </div>
        </div>
        <div className="search__result_card_header-right-section">
          ${user.userFee}USD
        </div>
      </div>
      <div className="search__result_card_content">
        <p>{user.userBio}</p>
      </div>
      <div className="search__result_card_footer">
        {user.userCommonTags.map((tag) => (
          <Tag key={tag} color="#EEC37E" tag={tag}></Tag>
        ))}
      </div>
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
