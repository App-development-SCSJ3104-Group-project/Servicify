import React from "react";
import Form from "../../components/form/form";
import "./signup.scss"
import googleIcon from "../../icons/GoogleIcon.svg"
import { connect } from "react-redux";
import {checkEmailAvailability} from "../../redux/users/users_action.js"


const SignupForm = ({checkEmailAvailability,duplicateUserEmail,users,loading}) => {
    
const formInputs=[
            {
                type: "text",
                placeHolder: "Enter Full Name",
                displayType: "block",
                customLabel: "Full Name*",
                className: "name form__right-side__innerForm__input-group"
            },
            {
                type: "text",
                placeHolder: "Enter Email Address",
                displayType: "block",
                customLabel: "Email Address*",
                className: "email form__right-side__innerForm__input-group"
            },
            {
                type: "password",
                placeHolder: "Enter Password",
                displayType: "block",
                customLabel: "Password*",
                className: "password form__right-side__innerForm__input-group"
            },
            {
                type: "checkbox",
                placeHolder: null,
                displayType: "inline-block",
                customLabel: "I agree to terms & conditions",
                className: "checkbox form__right-side__innerForm__input-group"
            }
        ]
        const formButtons = [

            {
                type: "button",
                backGroundColor: "#1565D8",
                innerText: "Register Account",
                color: "white",
                displayType: "block",
                width: "100%",
                margin: "2.5rem 0",
                boxShadow: "none",
                icon: null

            },
            {
                type: "button",
                backGroundColor: "white",
                innerText: "Register with Google",
                color: "black",
                displayType: "block",
                width: "100%",
                margin: "2.5rem 0",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                icon: googleIcon

            }
        ]
    return (
        <div className="signup-form">

            <Form
             type="signup" leftSideBackgroundHeight="130%" formInputs={formInputs} formButtons={formButtons} SubmitFormCallback={(userInfo) => {
                checkEmailAvailability(userInfo)
            }}></Form>

        </div>
    )
} 

const mapStateToProps=({usersReducer})=>({
  loading:usersReducer.loading,
  users: usersReducer.users,
  duplicateUserEmail:usersReducer.duplicateUserEmail
});
  const mapDispatchToProps = (dispatch) => {
  
    return {
        checkEmailAvailability:(user)=>{dispatch(checkEmailAvailability(user))}
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)


