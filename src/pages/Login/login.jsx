import React from "react";
import Form from "../../components/form/form";
import "./login.scss";
import googleIcon from "../../icons/GoogleIcon.svg";
import { validateUser, resetLoginState } from "../../redux/users/users_action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginFrom = ({
  loading,
  validateUser,
  IsUserInfoValid,
  userInAuth,
  resetLoginState,
}) => {
  let history = useHistory();

  const handleAuthState = (IsUserInfoValid, resetCallBack) => {
    if (IsUserInfoValid === true) {
      setTimeout(() => {
        resetCallBack();
        localStorage.setItem("user", JSON.stringify(userInAuth[0]));
        localStorage.setItem(
          "isServiceProvider",
          userInAuth[0].isServiceProvider
        );
        history.push("/");
      }, 2250);
      return (
        <div>
          <div className="login-alert login-sucess-alert animate__animated animate__bounceInRight">
            Login Sucess
          </div>
        </div>
      );
    } else {
      if (IsUserInfoValid != null) {
        return (
          <div className="login-alert login-failed-alert animate__animated animate__bounceInRight">
            Login Failed
          </div>
        );
      }
    }
  };

  const formInputs = [
    {
      type: "text",
      placeHolder: "Enter Email Address",
      displayType: "block",
      customLabel: "Email Address*",
      className: "email form__right-side__innerForm__input-group",
    },
    {
      type: "password",
      placeHolder: "Enter Password",
      displayType: "block",
      customLabel: "Password*",
      className: "password form__right-side__innerForm__input-group",
    },
  ];
  const formButtons = [
    {
      type: "button",
      backGroundColor: "#1565D8",
      innerText: "Login Account",
      color: "white",
      displayType: "block",
      width: "100%",
      margin: "2.5rem 0",
      boxShadow: "none",
      icon: null,
    },
    {
      type: "button",
      backGroundColor: "white",
      innerText: "Login with Google",
      color: "black",
      displayType: "block",
      width: "100%",
      margin: "2.5rem 0",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      icon: googleIcon,
    },
  ];

  return (
    <div className={`login-form  `}>
      {loading ? (
        <div className="loading-div">
          <div className="loader">Loading...</div>
        </div>
      ) : null}

      {handleAuthState(IsUserInfoValid, resetLoginState)}

      <Form
        type="login"
        formInputs={formInputs}
        formButtons={formButtons}
        goBackCallBack={() => history.goBack()}
        SubmitFormCallback={(userInfo) => {
          validateUser(userInfo);
        }}
      ></Form>
    </div>
  );
};

const mapStateToProps = ({ usersReducer }) => ({
  loading: usersReducer.loading,
  userInAuth: usersReducer.userInAuth,
  IsUserInfoValid: usersReducer.IsUserInfoValid,
});

const mapDispatchToProps = (dispatch) => {
  return {
    validateUser: (user) => {
      dispatch(validateUser(user));
    },
    resetLoginState: () => {
      dispatch(resetLoginState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrom);
