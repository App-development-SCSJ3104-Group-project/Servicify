import React from "react";
import Avatar from "../search_result/inner_components/avatar";
import "./post_card.css";
import PostContent from "./post_content";
import PostFooter from "./post_footer";
import OptionButton from "./option_Button";
import FeeIcon from "./icons/fee_icon";
import PostHeaderInfo from "./post_header-info";
import TimeIcon from "./icons/time_icon";
import LocationIcon from "./icons/location_icon";
import OptionIcon from "./icons/option_icon";
// import ShareIcon from "./icons/share_icon";
import { Link } from "react-router-dom";
const moment = require("moment");

const PostCard = (props) => {
  return (
    <div className="post-wrapper">
      <PostHeader {...props.post} actions={props.actions} />
      <PostContent {...props.post} />
      <PostFooter {...props.post} />
    </div>
  );
};

const PostHeader = ({
  actions,
  profileAvatar,
  timestamp,
  location,
  cancelationFee,
  postAuthor,
  _id,
  imgSrc,
}) => {
  const proposalShareOptioneMenu = [
    "Send default proposal",
    "send custome proposal",
  ];

  // getting userDate whether it is service provider or customer
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="post-header__content_styles">
      <div className="post-header__res">
        <Avatar
          source={
            imgSrc
              ? imgSrc
              : "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
          }
          width={"100px"}
          height={"100px"}
        />
        <div className="service_provider__avatar__side__content">
          <PostHeaderInfo
            description={moment(timestamp).fromNow()}
            icon={<TimeIcon />}
          />
          <PostHeaderInfo description={location} icon={<LocationIcon />} />
          <PostHeaderInfo
            description={cancelationFee + " RM cancellation fee"}
            icon={<FeeIcon />}
          />
        </div>
      </div>
      <div className="post__header_optionMenu">
        {currentUser.isServiceProvider ? (
          <OptionButton icon={<OptionIcon />}>
            <Dropdownmenu>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/service_provider_make_proposal_screen/" + _id}
              >
                <div className="item__options__selected">
                  <p>Send proposal</p>
                </div>
              </Link>
            </Dropdownmenu>
          </OptionButton>
        ) : (
          <OptionButton icon={<OptionIcon />}>
            <Dropdownmenu>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/service_provider_make_proposal_screen/" + _id}
              >
                <div className="item__options__selected">
                  <p>Delete post</p>
                </div>
              </Link>
            </Dropdownmenu>
          </OptionButton>
        )}
      </div>
    </div>
  );
};

const Dropdownmenu = (props) => {
  return <div className="post__dropdown-options">{props.children}</div>;
};

export default PostCard;
