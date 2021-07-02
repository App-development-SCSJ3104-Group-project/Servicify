import React from "react";
import Avatar from "../../../../components/search_result/inner_components/avatar";
// import AddIcon from "../../svg/add_icon";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../../../redux/posts/posts_action";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostCardForm = ({ useState }) => {
  //
  const currentUser = JSON.parse(localStorage.getItem("user"));
  //
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [paymentMethod, setPayementMethod] = useState("");
  const [cancelationFee, setCancelationFee] = useState();
  const [description, setDescription] = useState("");
  const [imgSrc, setImgSrc] = useState(currentUser.imgSrc);
  const [errorMessage, setErrorMessage] = useState(false);

  // dispatch
  const dispatch = useDispatch();

  // get the user from the local storage

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

  // post Data in on Object
  const postData = {};
  const handleSubmit = (event) => {
    event.preventDefault();

    postData["customerId"] = currentUser._id; // default value
    postData["location"] = location;
    postData["paymentMethod"] = paymentMethod;
    postData["cancelationFee"] = cancelationFee;
    postData["tags"] = tags;
    postData["description"] = description;
    postData["imgSrc"] = imgSrc;

    if (
      cancelationFee === "" ||
      location === "" ||
      description === "" ||
      paymentMethod === ""
    ) {
      alert("please fill all required inputs");
    } else {
      dispatch(createNewPost(postData));

      setCancelationFee("");
      setDescription("");
      setTags([]);

      setErrorMessage(true);
      showMessage();
    }
  };

  const showMessage = () => {
    toast.success("post was successfully added");
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage ? (
        <ToastContainer className="notification-container_proposal_form" />
      ) : (
        ""
      )}
      <div className="post__form_card___wrapper">
        <div className="post__form_card___header-section">
          <div className="post_form_card__header__avatar_styles">
            <Avatar
              source={currentUser.imgSrc}
              width={"100px"}
              height={"100px"}
            />
            <div className="post__form_card__header-section-form-element">
              <div className="post__form_card_header_dropdowns-section">
                <input type="text" value={imgSrc} hidden />
                <select
                  className="post__form_card_header_location-dropdown"
                  value={location}
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value disabled>
                    Location
                  </option>
                  <option value="Johor">Johor Bahru</option>
                  <option value="Kuala">Kuala Lumper</option>
                  <option value="Penange">Penang</option>
                  <option value="Selangor">Selangor</option>
                  <option value="Klentan">Klentan</option>
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
          {/* <div className="post__header__left__button">{<AddIcon />}</div> */}
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
          <div className="tags-input" style={{ marginBottom: 10 }}>
            <input
              type="text"
              placeholder="Enter cancelation Fee"
              onChange={(e) => setCancelationFee(e.target.value)}
            />
          </div>
          <div className="tags-input">
            <ul id="tags">
              {tags.map((tag, index) => (
                <li key={index} className="tag">
                  <span className="tag-title">{tag}</span>
                  <span
                    className="tag-close-icon"
                    onClick={() => removeTags(index)}
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
            <input
              type="text"
              onKeyUp={(event) =>
                event.key === "Shift" ? addTags(event) : null
              }
              placeholder="Press shift to add tags"
            />
          </div>
          <input
            className="submit__form_button__postForm"
            type="submit"
            name="submit"
            style={{ borderRadius: 20 }}
          />
        </div>
      </div>
    </form>
  );
};

export default PostCardForm;
