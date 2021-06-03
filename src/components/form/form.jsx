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
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      leftSideBackgroundHeight
    } = this.props;
    const { formInputs } = this.props;
    const { formButtons } = this.props;
    const { type } = this.props;
    const style = {
      // backgroundImage: `url(${mainImg})`,
      height:leftSideBackgroundHeight
    };
    return (
      <div className="form">
        <div className="form__left-side" style={style}>
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
        <div className="form__right-side">
          <div className="form__right-side__back-btn">
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
                  <div className="form__right-side__innerForm__header__primary">
                    Login
                  </div>
                </div>
              )}
            </div>
            <hr className="style-two" />

            {formInputs.map((formInput, index) => {
              // @ts-ignore
              return (
                <FormInputGroup
                  key={index}
                  type={formInput.type}
                  placeHolder={formInput.placeHolder}
                  className={formInput.className}
                  customLabel={formInput.customLabel}
                  displayType={formInput.displayType}
                ></FormInputGroup>
              );
            })}

            {formButtons.map((formButton, index) => {
              return <CustomButton {...formButton}></CustomButton>;
            })}
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
