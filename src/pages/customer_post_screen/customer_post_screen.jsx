import React from "react";
import Nav from "./../../components/navbar/navbar";
import SearchArea from "./../../components/search_area/search_area";
import "./customer_post_scree.css";
import PostCard from "./../../components/post_card/post_card";
import Avatar from "./../../components/search_result/avatar";
import OptionIcon from "./../../components/post_card/option_icon";
import Tag from "./../../components/search_result/tag";

const CustomerPostScreen = () => {
  return (
    <div>
      <Nav isLogged={true} />
      <SearchArea route={"posts"} />
      <div className="posts-wrappper-background">
        <PostCardForm></PostCardForm>
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

const PostCardForm = () => {
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
              <select className="post__form_card_header_location-dropdown">
                <option disabled>Location</option>
                <option value="Johor Bahru">Johor Bahru</option>
                <option value="Kuala Lumper">Kuala Lumper</option>
                <option value="Penange">Penange</option>
                <option value="Genting">Genting</option>
                <option value="Langkwai">Langkwai</option>
                <option value="Sabah">Sabah</option>
                <option value="Sarawk">Sarawk</option>
              </select>
              <select className="post__form_card_header_payment-dropdown">
                <option disabled>Payment</option>
                <option value="cash">Cash</option>
                <option value="online">Online Payment</option>
              </select>
              <button className="post__form_card_header_submit__button">
                upload file
              </button>
            </div>
          </div>
        </div>
        <div className="post__header__left__button">
          <OptionIcon />
        </div>
      </div>
      <div className="post__form_card_header_text-section">
        <textarea
          type="text"
          className="post__form_card_header_description_field"
          placeholder="Describe your problem here"
        ></textarea>
        <input type="text" className="post__form_card_header_postTags_field" />
        <div className="tags__post_form">
          <Tag tag={"#Electrical"} color="#57C4E5" />
          <Tag tag={"#Job"} color="#57C4E5" />
          <Tag tag={"#free"} color="#57C4E5" />
          <Tag tag={"#people"} color="#57C4E5" />
        </div>
      </div>
    </div>
  );
};

export default CustomerPostScreen;
