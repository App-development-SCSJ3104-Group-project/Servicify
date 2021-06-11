import React, { useState, useEffect } from "react";
import "./customer_post_scree.css";
import "./post_screen.scss";
import PostCard from "./../../components/post_card/post_card";
import Avatar from "./../../components/search_result/avatar";
import posts from "./dummydate";
import Template from "../../components/template/template";
import AddIcon from "./svg/add_icon";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/posts/posts_action";
import { useForm } from "react-hook-form";

const CustomerPostScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // use selectors
  const postsList = useSelector((state) => state.posts);
  console.log(postsList);

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
  const [tags, setTags] = useState(["Electical"]);
  const [location, setLocation] = useState("");
  const [paymentMethod, setPayementMethod] = useState("");
  const [cancelationFee, setCancelationFee] = useState(3.0);
  const [description, setDescription] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      tags +
        " " +
        description +
        " " +
        paymentMethod +
        " " +
        location +
        " " +
        cancelationFee
    );
  };

  return (
    <form onSubmit={handleSubmit}>
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
                <select
                  className="post__form_card_header_location-dropdown"
                  value={location}
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value disabled>
                    Location
                  </option>
                  <option value="Johor">Johor</option>
                  <option value="Kuala">Kuala</option>
                  <option value="Penange">Penang</option>
                </select>
                <select
                  className="post__form_card_header_location-dropdown"
                  value={paymentMethod}
                  name="paymentMethod"
                  onChange={(e) => setPayementMethod(e.target.value)}
                >
                  <option disabled>Payment Method</option>
                  <option value="Cash">Cash</option>
                  <option value="online Payment">online payment</option>
                </select>
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
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
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
              onKeyUp={(event) =>
                event.key === "Enter" ? addTags(event) : null
              }
              placeholder="Press enter to add tags"
            />
          </div>
          <input
            className="submit__form_button__postForm"
            type="submit"
            name="submit"
          />
        </div>
      </div>
    </form>
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
//     // import { getPosts } from './../../redux/posts/posts_action';
// addPost: (id) => {
//   dispatch(addPost(id));
// };

//   }
// }
// export default connect(mapStateToProps)(CustomerMain)
