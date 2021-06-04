import React from "react";
import Avatar from "../search_result/avatar";
import "./post_card.css";
import PostContent from "./post_content";
import PostFooter from "./post_footer";
import OptionButton from "./option_Button";
import FeeIcon from "./icons/fee_icon";
import PostHeaderInfo from "./post_header-info";
import TimeIcon from "./icons/time_icon";
import LocationIcon from "./icons/location_icon";
import OptionIcon from "./icons/option_icon";
import ShareIcon from "./icons/share_icon";

const PostCard = (props) => {
  return (
    <div className="post-wrapper">
      <PostHeader {...props.post} />
      <PostContent {...props.post} />
      <PostFooter {...props.post} />
    </div>
  );
};

const PostHeader = ({
  profileAvatar,
  postTime,
  postLocation,
  cancelllationFee,
  postAuthor,
}) => {
  const proposalShareOptioneMenu = [
    "Send default proposal",
    "send custome proposal",
  ];

  const customerOptionMenu = [
    "Hide this post",
    "share this post via",
    "Report this post",
  ];

  const serviceProviderOptionMenu = [
    "Remove post",
    "Edit post",
    "copy post link",
  ];

  return (
    <div className="post-header__content_styles">
      <div className="post-header__res">
        <Avatar source={profileAvatar} width={"100px"} height={"100px"} />
        <div className="service_provider__avatar__side__content">
          <PostHeaderInfo description={postTime} icon={<TimeIcon />} />
          <PostHeaderInfo description={postLocation} icon={<LocationIcon />} />
          <PostHeaderInfo description={cancelllationFee} icon={<FeeIcon />} />
        </div>
      </div>
      <div className="post__header_optionMenu">
        {postAuthor ? (
          <OptionButton icon={<ShareIcon />}>
            <Dropdownmenu>
              <ViewerOptions OptionMenu={proposalShareOptioneMenu} />
            </Dropdownmenu>
          </OptionButton>
        ) : (
          ""
        )}
        <OptionButton icon={<OptionIcon />}>
          <Dropdownmenu>
            {postAuthor ? (
              <ViewerOptions OptionMenu={serviceProviderOptionMenu} />
            ) : (
              <ViewerOptions OptionMenu={customerOptionMenu} />
            )}
          </Dropdownmenu>
        </OptionButton>
      </div>
    </div>
  );
};

const ViewerOptions = ({ OptionMenu }) => {
  return (
    <React.Fragment>
      {OptionMenu.map((option) => (
        <DropdownmenuItem key={option}>{option}</DropdownmenuItem>
      ))}
    </React.Fragment>
  );
};

const Dropdownmenu = (props) => {
  return <div className="post__dropdown-options">{props.children}</div>;
};

const DropdownmenuItem = (props) => {
  return (
    <div className="item__options__selected">
      <p>{props.children}</p>
    </div>
  );
};

export default PostCard;
