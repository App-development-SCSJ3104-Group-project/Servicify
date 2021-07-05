import React, { Component } from "react";
import Button from "../../components/button/button";
import Icon from "../../components/icon/icon_component";
import Review from "../../components/reviews/review";
import Template from "../../components/template/template";
import "./customer_profile.scss";
import favourite from "../../icons/edit.svg";
import Star from "../../icons/star.svg";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../redux/users/users_action";
import cancel from "../../icons/outline_add_white_24dp 1.svg";
import profileIcon from "../../icons/Ellipse (3).svg";
import Card from "../../components/card/card";
import { profileBody } from "./inner_profile/profile_body";
class CustomerProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      city: null,
      rate: null,
      isCashPaymentActive: null,
      diagnosingFees: null,
      jobDescription: null,
      firstName: null,
      lastName: null,
      gender: null,
      imgSrc: null,
      email: null,
      country: null,
      phoneNumber: null,
      postalCode: null,
      password: null,
      repeatedPassword: null,
      displayLanguage: null,
      jobName: null,
      class: "input_style",
      classH: "header_style",
      isEdit: false,
    };
  }

  edit() {
    this.setState({
      class: "input_style_edit",
      classH: "header_style_edit",
      isEdit: true,
    });
  }
  reset() {
    this.setState({
      city: null,
      rate: null,
      isCashPaymentActive: null,
      diagnosingFees: null,
      jobDescription: null,
      firstName: null,
      lastName: null,
      gender: null,
      imgSrc: null,
      email: null,
      country: null,
      phoneNumber: null,
      postalCode: null,
      password: null,
      repeatedPassword: null,
      displayLanguage: null,
      jobName: null,
      class: "input_style",
      classH: "header_style",
      isEdit: false,
    });
  }
  mockUsers = [
    {
      name: "John Smith",
      image: profileIcon,
      date: "Friday, 12/05/2020, 9 a.m",
      rate: 3.5,
      feedback:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?",
    },
    {
      name: "John Smith",
      image: profileIcon,
      date: "Friday, 12/05/2020, 9 a.m",
      rate: 3,
      feedback:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?",
    },
    {
      name: "John Smith",
      image: profileIcon,
      date: "Friday, 12/05/2020, 9 a.m",
      rate: 2,
      feedback:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?",
    },
    {
      name: "John Smith",
      image: profileIcon,
      date: "Friday, 12/05/2020, 9 a.m",
      rate: 5,
      feedback:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?",
    },
    {
      name: "John Smith",
      image: profileIcon,
      date: "Friday, 12/05/2020, 9 a.m",
      rate: 1,
      feedback:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?",
    },
  ];

  submit() {
    const { updateUser, user } = this.props;

    user.city = this.state.city !== null ? this.state.city : user.city;
    user.rate = this.state.rate !== null ? this.state.rate : user.rate;
    user.isCashPaymentActive =
      this.state.isCashPaymentActive !== null
        ? this.state.isCashPaymentActive
        : user.isCashPaymentActive;
    user.diagnosingFees =
      this.state.diagnosingFees !== null
        ? this.state.diagnosingFees
        : user.diagnosingFees;
    user.jobDescription =
      this.state.jobDescription !== null
        ? this.state.jobDescription
        : user.jobDescription;
    user.firstName =
      this.state.firstName !== null ? this.state.firstName : user.firstName;
    user.lastName =
      this.state.lastName !== null ? this.state.lastName : user.lastName;
    user.gender = this.state.gender !== null ? this.state.gender : user.gender;
    user.imgSrc = this.state.imgSrc !== null ? this.state.imgSrc : user.imgSrc;
    user.email = this.state.email !== null ? this.state.email : user.email;
    user.country =
      this.state.country !== null ? this.state.country : user.country;
    user.phoneNumber =
      this.state.phoneNumber !== null
        ? this.state.phoneNumber
        : user.phoneNumber;
    user.postalCode =
      this.state.postalCode !== null ? this.state.postalCode : user.postalCode;
    user.password =
      this.state.password !== null ? this.state.password : user.password;
    user.repeatedPassword =
      this.state.repeatedPassword !== null
        ? this.state.repeatedPassword
        : user.repeatedPassword;
    user.displayLanguage =
      this.state.displayLanguage !== null
        ? this.state.displayLanguage
        : user.displayLanguage;
    user.jobName =
      this.state.jobName !== null ? this.state.jobName : user.jobName;
    user.jobDescription =
      this.state.jobDescription !== null
        ? this.state.jobDescription
        : user.jobDescription;
    user.isCashPaymentActive =
      this.state.isCashPaymentActive !== null
        ? this.state.isCashPaymentActive
        : user.isCashPaymentActive;
    user.diagnosingFees =
      this.state.diagnosingFees !== null
        ? this.state.diagnosingFees
        : user.diagnosingFees;
    user.rate = this.state.rate !== null ? this.state.rate : user.rate;

    updateUser(user);
    this.reset();
  }
  getRate(rate) {
    let block = [];
    for (let index = 0; index < rate; index++) {
      block.push(<Icon height="2rem" width="2rem" src={Star} />);
    }
    return block;
  }
  componentWillMount() {
    const { getUser } = this.props;

    getUser(this.props.match.params.id);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { loading, user } = this.props;

    return loading ? (
      <div className="loading-div">
        <div className="loader"> Loading...</div>
      </div>
    ) : user !== null ? (
      <Template route={"profile"} padding="0rem">
        <div className="main_content">
          {this.newMethod(user)}

          <div className="profile_body">
            {profileBody(this.state, user, this.handleInputChange.bind(this))}

            <br />
            <br />
            {user.isServiceProvider ? <Review /> : null}
            {user.isServiceProvider ? (
              <div className="feedback_card">
                <Zoom>
                  {this.mockUsers.map((e) => (
                    <Card image_src={profileIcon}>
                      <div className="header">
                        <div className="card_header">
                          <h5>{e.name}</h5>
                          <h5>{e.date}</h5>
                        </div>
                      </div>

                      <div className="card_body">
                        <div className="feedback">{e.feedback}</div>

                        <br />
                        <div className="card_feedback_rate">
                          {this.getRate(e.rate)}
                        </div>
                      </div>
                    </Card>
                  ))}
                </Zoom>
              </div>
            ) : null}
          </div>
        </div>
      </Template>
    ) : (
      <div className="loading-div">
        <div className="loader"> Loading...</div>
      </div>
    );
  }

  newMethod(user) {
    return (
      <div className="profile_header">
        <div className="profile_buttons">
          {this.state.isEdit ? (
            [
              // @ts-ignore
              <Button
                innerText={null}
                margin="0.3rem"
                color="black"
                iconPosition="false"
                backGroundColor="#1E2833"
                width="4rem"
                height="4rem"
                onClick={() => this.reset()}
                icon={cancel}
                borderRadius="50%"
              />,
              // @ts-ignore
              <Button
                innerText={"Update"}
                margin="0.3rem"
                color="white"
                iconPosition="false"
                backGroundColor="#1E2833"
                width="10rem"
                height="4rem"
                borderRadius="20px"
                onClick={() => this.submit()}
              />,
            ]
          ) : (
            // @ts-ignore
            <Button
              innerText={null}
              margin="0.3rem"
              color="black"
              iconPosition="false"
              backGroundColor="#1E2833"
              width="4rem"
              height="4rem"
              onClick={() => this.edit()}
              icon={favourite}
              borderRadius="50%"
            />
          )}
        </div>
        <Zoom>
          <div className="profile_image">
            <img src={user.imgSrc} alt="" style={{ borderRadius: "50%" }} />
            <h3>{user.firstName + " " + user.lastName}</h3>
          </div>
        </Zoom>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => ({
  user: usersReducer.user,
  loading: usersReducer.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => {
      dispatch(getUser(id));
    },
    updateUser: (user) => {
      dispatch(updateUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile);
