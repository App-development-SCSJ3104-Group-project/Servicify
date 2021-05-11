import React from "react";
import "./footer.css";
import Icon from "../icon_component/icon";
import logo from "../../min_icons/Logo.svg";
import logoF from "../../min_icons/001-facebook.svg";
import logoI from "../../min_icons/004-instagram.svg";
import logoT from "../../min_icons/003-twitter.svg";

const footer = () => {
    return (

        <div className="footer">
            <Icon src={logo} />
            <div className="paragraph">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quod voluptates sint mollitia, ipsa laboriosam cum tenetur natus perspiciatis amet.</p>
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
