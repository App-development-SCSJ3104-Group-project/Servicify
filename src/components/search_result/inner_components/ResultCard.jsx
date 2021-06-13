import React from "react";
import Avatar from "./avatar";
import StarIcon from "./star";
import Tag from "./tag";
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
export default UserResultCard