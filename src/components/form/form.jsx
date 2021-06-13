import React from "react";

import "./form.scss";
import FormInputGroup from "../formInput/formInput";
import CustomButton from "../../components/button/button";
import leftArrow from "../../icons/left-arrow.svg";
import OrangeDots from "../../icons/OrangeDots.svg";
import RedCircles from "../../icons/RedCircles.svg";
import Quotations from "../../icons/Quotations.svg";
import WhiteArrow  from "../../icons/WhiteArrow.svg";
import Check from "../../icons/Check.svg";
import {useHistory, Redirect } from 'react-router-dom';


const Form = ({ formInputs, formButtons, type, leftSideBackgroundHeight, SubmitFormCallback }) => {


  let userInfo={}
const validateEmailFormat = (email) => {
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleFormSubmission = (formInputs, SubmitFormCallback) => {
              let missingField,isEmailValid = false;
              formInputs.forEach((formInput) => {
                let elementIdentifer = formInput.className.split(" ")[0];
                
                if (userInfo[elementIdentifer] && userInfo[elementIdentifer] != "") {
                  
                  if (elementIdentifer == "email") {
                    isEmailValid=validateEmailFormat(userInfo[elementIdentifer])
                  }
                } else {
                 missingField = true;
                }
              })
    !missingField ? isEmailValid ? SubmitFormCallback(userInfo) : alert("please fill a valid email") : alert("please fill in all input field")
    
              
  }

  const style = {
    // backgroundImage: `url(${mainImg})`,
    height:leftSideBackgroundHeight
  };
    let history = useHistory();

  const goBack=()=>{
    history.goBack();
    }
  return (
    <div className="form" >
    <div className="form__left-side " style={style}>
      <img
        src={OrangeDots}
        alt=""
        className="form__left-side__orange-dots"
      />
      <img
        src={RedCircles}
        alt=""
        className="form__left-side__red-circles"
      />

      <div className="form__left-side__main-content">
        <div className="form__left-side__main-content__text">
          <p className="form__left-side__main-content__paragraph">
            The passage experienced a surge in popularity during the 1960s
            when Letraset used it on their dry-transfer sheets, and again
            during the 90s as desktop publishers bundled the text with their
            software.
          </p>
          <div className="form__left-side__main-content__user-name">
            Vincet Obi{" "}
            <img
              src={Check}
              alt=""
              className="form__left-side__main-content__user-name__check"
            />
          </div>
        </div>

        <img
          src={WhiteArrow}
          alt=""
          className="form__left-side__white-arrow"
        />
        <img
          src={Quotations}
          alt=""
          className="form__left-side__quotation"
        />
      </div>
    </div>
    <div className="form__right-side ">
      <div className="form__right-side__back-btn" onClick={()=>goBack()}>
        <img className="backArrow" src={leftArrow} alt="" />
        Back
      </div>
      <form className="form__right-side__innerForm">
        <div className="form__right-side__innerForm__header">
          {type == "signup" ? (
            <div>
              <div className="form__right-side__innerForm__header__primary">
                Register Individual Account!
              </div>
              <div className="form__right-side__innerForm__header__secondary">
                For the purpose of industry regulation, your details are
                required.
              </div>
            </div>
          ) : (
            <div>
              <div className="form__right-side__innerForm__header__primary ">
                Login
              </div>
            </div>
          )}
        </div>
        <hr className="style-two" />

        {formInputs.map((formInput, index) => {

          // dynamically adding state attributes instead of typing it statically
          // state attribtues will be customized to each form type
          var formInputIdentfier = formInput.className.split(" ")[0];
          
          // @ts-ignore
          return (
            <div className=" animate__animated animate__zoomInDown" style={{animationDelay:`${index*0.5}s`}}>
              {<FormInputGroup
              key={index}
              type={formInput.type}
              placeHolder={formInput.placeHolder}
              className={formInput.className}
              customLabel={formInput.customLabel}
                displayType={formInput.displayType}
              
                onChange={(value) => {
                  //nested object set state way
                  userInfo[formInputIdentfier]=value
                }}
            ></FormInputGroup>}
            </div>
          );
        })}

        {formButtons.map((formButton, index) => {
         
          return <div className=" animate__animated animate__zoomIn" style={{animationDelay:`${formButtons.length*1.1}s`}}>
            {<CustomButton key={index} {...formButton} onClick={index == 0 ? () => {
              handleFormSubmission(formInputs,SubmitFormCallback)
            }:null}></CustomButton>}
          </div>
        })}

          {/* <div className="extra-feature">
              or
            {type == "login" ?
            
            <button className="extra-feature__btn" onClick={()=>history.push("/signup")}>SignUp</button>:<button className="extra-feature__btn" onClick={()=>history.push("/login")}>login</button>
          
          }
          </div> */}
      </form>
    </div>
  </div>
    )
  
}


export default Form;
