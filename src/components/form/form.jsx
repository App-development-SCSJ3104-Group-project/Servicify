import React from "react";
import "./form.scss";
import FormInputGroup from "../formInput/formInput";
import LeftSide from "./components/leftSide/leftSide"
import CustomButton from "../../components/button/button";
import leftArrow from "../../icons/left-arrow.svg";



class Form extends React.Component {

  constructor (props) {

    super(props);
    this.state = {
      userInfo: {}
    }

  }
  validateEmailFormat = (email) => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleFormSubmission = (formInputs, SubmitFormCallback) => {
    const { userInfo } = this.state;

    let missingField, isEmailValid = false;
    formInputs.forEach((formInput) => {
      let elementIdentifer = formInput.className.split(" ")[0];

      if (userInfo[elementIdentifer] && userInfo[elementIdentifer] != "") {

        if (elementIdentifer === "email") {
          isEmailValid = this.validateEmailFormat(userInfo[elementIdentifer])
        }

      } else {

        if (formInput.type !== "checkbox" && formInput.preRequiste == undefined) {
          missingField = true;

        }
        else {

          if (userInfo[formInput.preRequiste]) {

            missingField = true;
          }
          else {
            missingField = false;
          }
        }


      }

    })

    !missingField ? isEmailValid ? SubmitFormCallback(userInfo) : alert("please fill a valid email") : alert("please fill in all input field")


  }
  handleInputChange = (formInput, value, userInfo, formInputIdentfier) => {

    //nested object set state way
    if (formInput.type !== "checkbox") {
      userInfo[formInputIdentfier] = value

    }
    else {

      userInfo[formInputIdentfier] = !userInfo[formInputIdentfier]
      this.setState({})

    }

  }
  renderInputFields = (formInput, index) => {

    const { userInfo } = this.state;

    // dynamically adding state attributes instead of typing it statically
    // state attribtues will be customized to each form type

    var formInputIdentfier = formInput.className.split(" ")[0];
    if (formInput.type === "checkbox") {

      if (userInfo[formInputIdentfier] === undefined) {
        userInfo[formInputIdentfier] = false

      }
    }

    if (formInput.preRequiste === undefined || (formInput.preRequiste && userInfo.isServiceProvider === true)) {

      return (

        <div className={`animate__animated animate__zoomInDown`} style={{ width: formInput.width, animationDelay: `${formInput.preRequiste ? 0.25 : index * 0.5}s` }}>

          {
            // @ts-ignore
            <FormInputGroup
              key={index}
              type={formInput.type}
              placeHolder={formInput.placeHolder}
              className={formInput.className}
              customLabel={formInput.customLabel}
              displayType={formInput.displayType}
              onChange={(value) => this.handleInputChange(formInput, value, userInfo, formInputIdentfier)}
            ></FormInputGroup>
          }
        </div>
      );

    }

  }



  render() {


    const { formInputs, formButtons, type, leftSideBackgroundHeight, SubmitFormCallback, goBackCallBack } = this.props;
    const style = {
      height: leftSideBackgroundHeight
    };

    return (
      <div className="form" >

        <LeftSide style={style}></LeftSide>

        <div className="form__right-side ">
          <div className="form__right-side__back-btn" onClick={() => goBackCallBack()}>
            <img className="backArrow" src={leftArrow} alt="" />
            Back
          </div>
          <form className="form__right-side__innerForm" style={type === "signup" ? { top: "43%" } : { top: "50%" }} autoComplete="true">
            <div className="form__right-side__innerForm__header">
              {type === "signup" ? (
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

            {formInputs.map((formInput, index) => this.renderInputFields(formInput, index))}

            {formButtons.map((formButton, index) => {

              return <div className=" animate__animated animate__zoomIn" style={{ animationDelay: `${formButtons.length * 1.1}s` }}>
                {<CustomButton key={index} {...formButton} onClick={index === 0 ? () => {
                  this.handleFormSubmission(formInputs, SubmitFormCallback)
                } : null}></CustomButton>}
              </div>
            })}


          </form>
        </div>
      </div>
    )
  }
}



export default Form;
