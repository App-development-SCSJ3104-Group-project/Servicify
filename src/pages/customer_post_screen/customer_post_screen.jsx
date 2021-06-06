import React, { useState } from "react";
import "./customer_post_scree.css";
import "./post_screen.scss";
import PostCard from "./../../components/post_card/post_card";
import Avatar from "./../../components/search_result/avatar";
import posts from "./dummydate";
import Template from "../../components/template/template";
import AddIcon from "./svg/add_icon";

const CustomerPostScreen = () => {
  return (
    <Template route="posts">
      <div>
        <div className="posts-wrappper-background">
          <PostCardForm></PostCardForm>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Template>
  );
};

const PostCardForm = () => {
  // to hold the array of tags added by user
  const [tags, setTags] = useState(["Nodejs", "MongoDB"]);

  // to handle the action of deleting a tag
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  // to handle the action of adding a tag into the list
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const locationOptions = ["Johor Bahru", "Kuala Lumper", "Penange", "Genting"];
  const paymentOptions = ["cash", "online"];

  return (
    <div className="post__form_card___wrapper">
      <div className="post__form_card___header-section">
        <div className="post_form_card__header__avatar_styles">
          <Avatar
            source={
              "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
            }
            width={"100px"}
            height={"100px"}
          />
          <div className="post__form_card__header-section-form-element">
            <div className="post__form_card_header_dropdowns-section">
              <DropdownItems options={locationOptions} />
              <DropdownItems options={paymentOptions} />
              <button className="post__form_card_header_submit__button">
                upload file
              </button>
            </div>
          </div>
        </div>
        <div className="post__header__left__button">{<AddIcon />}</div>
      </div>
      <div className="post__form_card_header_text-section">
        <textarea
          type="text"
          className="post__form_card_header_description_field"
          placeholder="Describe your problem here"
        ></textarea>
        <div className="tags-input">
          <ul id="tags">
            {tags.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag-title">{tag}</span>
                <span
                  className="tag-close-icon"
                  onClick={() => removeTags(index)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            type="text"
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
            placeholder="Press enter to add tags"
          />
        </div>
      </div>
    </div>
  );
};

const DropdownItems = (props) => {
  return (
    <select className="post__form_card_header_location-dropdown">
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomerPostScreen;

// const mapStateToProps = (state) => {
//   return {
//     name: state.main.posts
//   }
// }

// const mapDispatchToProps = (dispatch) => {

//   return {
//     // import action from //???? action file
//     // addPost: (id) => { dispatch(addPost(id)) }

//   }
// }
// export default connect(mapStateToProps)(CustomerMain)
