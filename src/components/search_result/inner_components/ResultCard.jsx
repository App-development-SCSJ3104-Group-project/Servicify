import React from "react";
import Avatar from "./avatar";
import StarIcon from "./star";
import Tag from "./tag";
import defaultUserImg from "../../../icons/defaultUser.svg"
const UserResultCard = (props) => {
  const getStar = (data) => {
    let element = [];
    for (let index = 0; index < data; index++) {
      element.push(<StarIcon />);
    }

    return element;
  };

  return (
    <div className="search__result_card_container">
      <div className="search__result_card_header">
        <div className="search__result_card_header-left-section">
          <Avatar source={props.data.imgSrc ? props.data.imgSrc : defaultUserImg} width={"80px"} height={"80px"} />
          <div className="search__result_card_header-sub-section">
            <span>
              {props.data.country}, {props.data.city} @
              {props.data.firstName + " " + props.data.lastName}
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

      </div>
    </div>
  );
};
export default UserResultCard;
