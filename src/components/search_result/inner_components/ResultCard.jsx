import React from "react";
import Avatar from "./avatar";
import StarIcon from "./star";
import Tag from "./tag";
const UserResultCard = (props) => {
  const getStar = (data) => {

    let element = []
    for (let index = 0; index < data; index++) {
      element.push(<StarIcon />)
    }

    return element

  }

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
              {props.data.country}, {props.data.city} @{props.data.firstName + " " + props.data.lastName}
            </span>
            <div className="search__result_card_header-sub-section-stars">
              {getStar(props.data.rate)}
            </div>
          </div>
        </div>
        <div className="search__result_card_header-right-section">
          ${props.data.diagnosingFees}USD
        </div>
      </div>
      <div className="search__result_card_content">
        <p>{props.data.jobDescription}</p>
      </div>
      <div className="search__result_card_footer">
        {/* {user.userCommonTags.map((tag) => (
          <Tag key={tag} color="#EEC37E" tag={tag}></Tag>
        ))} */}
      </div>
    </div>
  );
};
export default UserResultCard