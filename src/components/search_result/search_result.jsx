import React from "react";
import "./search_result.scss";
import Zoom from "react-reveal/Zoom";
import UserResultCard from "./inner_components/ResultCard";
import { connect } from "react-redux";
import { fetchServiceProviders } from "../../redux/categories/categories_action";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchResult = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceProviders());
  }, [dispatch]);

  // use selectors
  // @ts-ignore
  const data = useSelector(({ categoriesReducer }) => categoriesReducer);
  const [state, setState] = useState(new Map());
  const profile = filterSet(state);
  return data.loading ? (
    <div className="loading-div">
      <div className="loader">Loading...</div>
    </div>
  ) : (
    <div className="search-result-container">
      <Zoom left>
        <div className="search-result-container__filter">
          <div className="search-result-container__filter__bar">
            <p className="search-result-container__filter__bar__skills">
              Skills:
            </p>
            {Array.from(data.serviceProviders).map((skill) => (
              <FilterSkills
                key={skill[0]}
                skill={skill[0]}
                setState={setState}
              />
            ))}
          </div>
        </div>
      </Zoom>
      <Zoom right>
        <div className="search-result-container__content">
          <div className="search-result-container__content__title">
            <p>Top Results:</p>
          </div>
          {profile.length !== 0
            ? profile.map((e) =>
                data.serviceProviders
                  .get(e)
                  .map((v) => <UserResultCard key={v._id} data={v} />)
              )
            : Array.from(data.serviceProviders).map((e) =>
                e[1].map((v) => <UserResultCard key={v._id} data={v} />)
              )}
        </div>
      </Zoom>
    </div>
  );
};

const filterSet = (data) => {
  let filter = [];
  Array.from(data).map((e) => {
    e[1] === true ? filter.push(e[0]) : (e = e);
  });

  return filter;
};
const FilterSkills = (props) => {
  return (
    <div className="search-result-container__filter__bar__item">
      <input
        type="checkbox"
        id="checkbox_filter-section"
        onChange={(event) => {
          props.setState(
            (map) => new Map(map.set(props.skill, event.target.checked))
          );
        }}
      />
      <span className="search-result-container__filter__bar__item__name">
        {props.skill}
      </span>
      <br />
    </div>
  );
};

const mapStateToProps = ({ categoriesReducer }) => {
  return {
    serviceProviders: categoriesReducer.serviceProviders,
    loading: categoriesReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServiceProviders: () => {
      dispatch(fetchServiceProviders());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
