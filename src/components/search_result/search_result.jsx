import React from "react";
import "./search_result.css";
import users from "./dummydata";
import Zoom from 'react-reveal/Zoom'
import UserResultCard from "./inner_components/ResultCard"
import { connect } from "react-redux";
import { fetchServiceProviders } from "../../redux/categories/categories_action"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchResult = (props) => {
  const filterSkills = [
    "Electrical",
    "Mechnical",
    "House Cleaning",
    "Pet care",
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceProviders());
  }, [dispatch]);

  // use selectors
  const data = useSelector(({ categoriesReducer }) => categoriesReducer);
  const [state, setState] = useState(new Map())
  const profile = filterSet(state)
  return (
    data.loading ? (
      <div className="loading-div">
        <div className="loader">Loading...</div>
      </div>
    ) :
      <div className="search__result_container_a">
        <Zoom left>
          <div className="search__result_filter-section">
            {/* <div className="filter-section_title">
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
            </div> */}
            <div className="filter-section_content-3">
              <p className="filter-section_content-3_skills">Skills:</p>
              {Array.from(data.serviceProviders).map((skill) => (
                <FilterSkills key={skill[0]} skill={skill[0]} setState={setState} />
              ))}
            </div>
          </div>
        </Zoom>
        <Zoom right>
          <div className="search__result_results-section">
            <div className="search__result_results-section-title">
              <p>Top Results:</p>
            </div>
            {
              profile.length !== 0 ?
                profile.map((e) =>
                  data.serviceProviders.get(e).map((v) => (
                    <UserResultCard key={v._id} data={v} />)
                  )
                )
                :
                Array.from(data.serviceProviders).map((e) => (
                  e[1].map((v) => (
                    <UserResultCard key={v._id} data={v} />
                  ))
                ))
            }
          </div>
        </Zoom>
      </div>
  );
};

const filterSet = (data) => {

  let filter = []
  Array.from(data).map((e) => {
    e[1] ==== true ? filter.push(e[0]) : e = e
  })

  return filter
}
const FilterSkills = (props) => {
  return (
    <div className="skill_box-filter">
      <input type="checkbox" id="checkbox_filter-section" onChange={(event) => { props.setState(map => new Map(map.set(props.skill, event.target.checked))) }} />
      <span className="skill_name">{props.skill}</span>
      <br />
    </div>
  );
};

const mapStateToProps = ({ categoriesReducer }) => {
  return {
    serviceProviders: categoriesReducer.serviceProviders,
    loading: categoriesReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    fetchServiceProviders: () => { dispatch(fetchServiceProviders()) }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
