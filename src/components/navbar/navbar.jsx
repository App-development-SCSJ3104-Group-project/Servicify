// @ts-nocheck
import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import CustomButton from "./../button/button";
import NotificationIcon from "./notification_icons";
import Check_Icon from "./check_icon";
import { userLogout } from "../../redux/users/users_action";
import LogoTransparent from "../../icons/Brand/logo.png"
import Zoom from 'react-reveal/Zoom'
import { connect } from "react-redux";

function Nav({ userInAuth, userLogout, isLogged }) {
  return <Navbar>{localStorage.length != 0 ? <SignedInNav userLogout={userLogout} /> : <SignedOutNav />}</Navbar>;
}
const SignedInNav = ({ userLogout }) => {
  return (

    <React.Fragment>
      <NavItem icon={<NotificationIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <Link to="/" style={{ textDecoration: "none" }}>

        <CustomButton
          innerText="Logout"
          margin="1rem"
          color="white"
          backGroundColor="#ff835c"
          width="12rem"
          height="4rem"
          borderRadius="10px"
          onClick={() => { localStorage.clear(); userLogout() }}
        ></CustomButton>
      </Link>
    </React.Fragment>
  );
};

const SignedOutNav = () => {
  return (
    <React.Fragment>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <CustomButton
          innerText="login"
          margin="1rem"
          color="white"
          backGroundColor="#ff835c"
          width="12rem"
          height="4rem"
          borderRadius="10px"
          animationClassName="animate__animated animate__zoomInLeft"
          animationDelay=".75s"
        ></CustomButton>
      </Link>
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <CustomButton
          innerText="Sign up"
          margin="1rem"
          color="white"
          backGroundColor="#ff835c"
          width="12rem"
          height="4rem"
          borderRadius="10px"
          animationClassName="animate__animated animate__zoomInRight"
          animationDelay=".75s"

        ></CustomButton>
      </Link>
    </React.Fragment>
  );
};

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__left-section">
        <p className="navbar__logo" > <span className="navbar__logo__name" > <Zoom right cascade>Servicify</Zoom> </span>  <img src={LogoTransparent} className="navbar__logo__img animate__animated animate__zoomIn"></img></p>
      </div>
      <div className="navbar__right-section">
        <ul className="navbar__right-section__list">{props.children}</ul>
      </div>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="navbar__right-section__circular-btn">
      <a href="#" className="navbar__right-section__circular-btn__icon" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownItem(props) {
  return (
    <div href="#" className="navbar__menu-item">
      {props.children}
      <span className="navbar__menu-item_box-btn  navbar__menu-item_box-btn__right-positioned">
        {props.rightIcon}
      </span>
      <p className="navbar__menu-item__timestamp">{props.notificationTime}</p>
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="navbar__menu-item__display-area">
      <div className="navbar__menu-item__display-area__menu">
        <DropdownItem
          rightIcon={<Check_Icon />}
          notificationTime="Friday, 12/05/2020, 9 a.m"
        >
          <p className="navbar__menu-item__display-area__title">
            new proposal has been sent to your post
          </p>
          <span></span>
        </DropdownItem>
        <DropdownItem
          rightIcon={<Check_Icon />}
          notificationTime="Friday, 12/05/2020, 9 a.m"
        >
          <p className="navbar__menu-item__display-area__title">
            new proposal has been sent to your post
          </p>
          <span></span>
        </DropdownItem>
        <DropdownItem
          rightIcon={<Check_Icon />}
          notificationTime="Friday, 12/05/2020, 9 a.m"
        >
          <p className="navbar__menu-item__display-area__title">
            new proposal has been sent to your post
          </p>
          <span></span>
        </DropdownItem>
      </div>
    </div>
  );
}

const mapStateToProps = ({ usersReducer }) => {

  return {
    userInAuth: usersReducer.userInAuth
  }

}
const mapDispatchToProps = (dispatch) => {

  return {
    userLogout: () => dispatch((userLogout()))
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
