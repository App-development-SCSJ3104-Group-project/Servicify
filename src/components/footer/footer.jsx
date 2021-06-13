import React from "react";
import "./footer.css";
import Icon from "../icon_component/icon";
import logo from "../../icons/Logo.svg";
import logoF from "../../icons/001-facebook.svg";
import logoI from "../../icons/004-instagram.svg";
import logoT from "../../icons/003-twitter.svg";

const footer = () => {
    return (

        <div className="footer">
            <Icon src={logo} />
            <div className="paragraph">
                <p></p>
            </div>
            <div className="bottom_navigation">
                <h6>About</h6>
                <h6>Contact Us</h6>
                <h6>Profile</h6>
                <h6>Potato</h6>
                <h6>Mahshy</h6>
            </div>

            <div className="socialmedia">

                <Icon src={logoF} />
                <Icon src={logoI} />
                <Icon src={logoT} />
            </div>

        </div>

    );
};

export default footer;
