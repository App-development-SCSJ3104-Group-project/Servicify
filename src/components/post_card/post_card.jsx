import React from "react";
import Avatar from "../search_result/inner_components/avatar";
import "./post_card.scss";
import PostContent from "./innercomponents/postcontent/post_content";
import PostFooter from "./innercomponents/postfooter/post_footer";
import OptionButton from "./innercomponents/optionalButton/option_Button";
import FeeIcon from "./icons/fee_icon";
import PostHeaderInfo from "./innercomponents/postHeader/post_header-info";
import TimeIcon from "./icons/time_icon";
import LocationIcon from "./icons/location_icon";
import OptionIcon from "./icons/option_icon";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAPost } from "../../redux/posts/posts_action";
import defaultUserImg from "../../icons/defaultUser.svg";
const moment = require("moment");

const PostCard = (props) => {
  return (
    <div className="post__wrapper">
      <PostHeader {...props.post} actions={props.actions} />
      <PostContent {...props.post} />
      <PostFooter {...props.post} />
    </div>
  );
};

const PostHeader = ({
  timestamp,
  location,
  cancelationFee,
  _id,
  imgSrc,
  customerId,
}) => {
  const deletePost = (id) => {
    dispatch(deleteAPost(id));
  };

  // getting userDate whether it is service provider or customer
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          source={imgSrc ? imgSrc : defaultUserImg}
          width={"100px"}
          height={"100px"}
        />
        <div className="post__header__text-container">
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
      <div className="post__option__menu">
        {currentUser.isServiceProvider ? (
          <OptionButton>
            <Dropdownmenu>
              {currentUser._id === customerId ? (
                <div className="post__option__item">
                  <a onClick={() => deletePost(_id)}>Delete post</a>
                </div>
              ) : (
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={"/service_provider_make_proposal_screen/" + _id}
                >
                  <div className="post__option__item">
                    <p>Send proposal</p>
                  </div>
                </Link>
              )}
            </Dropdownmenu>
          </OptionButton>
        ) : (
          <OptionButton icon={<OptionIcon />}>
            {currentUser._id === customerId ? (
              <Dropdownmenu>
                <div className="post__option__item">
                  <a onClick={() => dispatch(deleteAPost(_id))}>Delete post</a>
                </div>
              </Dropdownmenu>
            ) : (
              ""
            )}
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
