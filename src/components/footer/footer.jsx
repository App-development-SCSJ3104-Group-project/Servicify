import React from "react";
import "./footer.scss";
import Icon from "../icon_component/icon";
import logo from "../../icons/Logo.svg";
import logoF from "../../icons/001-facebook.svg";
import logoI from "../../icons/004-instagram.svg";
import logoT from "../../icons/003-twitter.svg";
import Slide from "react-reveal/Slide";

const footer = () => {
  return (
    <Slide up>
      <div className="footer">
        <Icon src={logo} />
        <div className="footer__paragraph">
          <p></p>
        </div>
        <div className="footer__bottom-navigation">
          <h6>About</h6>
          <h6>Contact Us</h6>
          <h6>Profile</h6>
          <h6>Potato</h6>
          <h6>Mahshy</h6>
        </div>

        <div className="footer__socialmedia-bar">
          <Icon src={logoF} />
          <Icon src={logoI} />
          <Icon src={logoT} />
        </div>
      </div>
    </Slide>
  );
};

export default footer;
