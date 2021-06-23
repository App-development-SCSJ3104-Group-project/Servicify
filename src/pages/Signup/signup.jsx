import React from "react";
import Form from "../../components/form/form";
import "./signup.scss"
import googleIcon from "../../icons/GoogleIcon.svg"
import { connect } from "react-redux";
import {checkEmailAvailability,resetSignupState} from "../../redux/users/users_action.js"
import { useHistory } from "react-router-dom";

const SignUpFrom = ({ checkEmailAvailability, duplicateUserEmail, users,  loading, resetSignupState }) => {


    
        const handleAuthState = (duplicateUserEmail,resetCallBack) => {
    
        if (duplicateUserEmail == false) {
            setTimeout(() => { 
            resetCallBack()
                history.push('/login');
        }, 2450)
            return <div>
                <div className="login-alert login-sucess-alert animate__animated animate__bounceInRight">Signup Sucess</div>
                
</div>
        }
        else {

            if (duplicateUserEmail != null) {
                
                return <div className="login-alert login-failed-alert animate__animated animate__bounceInRight">Login Failed</div>
            }
        }
        
    }

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
        let history = useHistory();

    
    return (

            <div className="signup-form">
 {
                loading?<div className="loading-div">
                <div className="loader">Loading...</div>
            </div>:null
                }
                {handleAuthState(duplicateUserEmail,resetSignupState)}
            <Form
                    type="signup" leftSideBackgroundHeight="130%" goBackCallBack={()=>history.goBack()} formInputs={formInputs} formButtons={formButtons} SubmitFormCallback={(userInfo) => {
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
        checkEmailAvailability: (user) => { dispatch(checkEmailAvailability(user)) },
        resetSignupState:()=>{dispatch(resetSignupState())}
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFrom)


