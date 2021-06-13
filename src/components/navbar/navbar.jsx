import React, { useState } from "react";
import "./navbar.css";
import { Router, Link } from "react-router-dom";
import CustomButton from "./../button/button";
import NotificationIcon from "./notification_icons";
import Check_Icon from "./check_icon";
import { userLogout } from "../../redux/users/users_action";
import LogoTransparent from "../../icons/Brand/logo.png"

import { connect } from "react-redux";

function Nav({userInAuth,userLogout}) {
  return <Navbar>{userInAuth ?<SignedInNav userLogout={userLogout}  /> : <SignedOutNav  />}</Navbar>;
}
const SignedInNav = ({userLogout}) => {
  return (
    <React.Fragment>
      <NavItem icon={<NotificationIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    <Link to="/" style={{textDecoration:"none"}}>
       <CustomButton
          innerText="Logout"
          margin="1rem"
          color="white"
          backGroundColor="#ff835c"
          width="12rem"
          height="4rem"
          borderRadius="10px"
          onClick={()=> userLogout() }
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
    <div className="navbar ">
      <div className="left-section-navbar-1">
        <p className="logoname-service " > <span className="logo-name animate__animated animate__zoomInDown" style={{animationDelay:".5s"}}>Servicify</span>  <img src={LogoTransparent}  className="logo-image animate__animated animate__zoomIn"></img></p>
      </div>
      <div className="right-section-navbar-2">
        <ul className="navbar-nav-2">{props.children}</ul>
      </div>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="circled-button-box">
      <a href="#" className="box-icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownItem(props) {
  return (
    <div href="#" className="menu-item-styles">
      {props.children}
      <span className="box-icon-button  icon-right-positioned">
        {props.rightIcon}
      </span>
      <p className="dropdown-item-header-timestamp">{props.notificationTime}</p>
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="dropdown-showup-area">
      <div className="menu-1">
        <DropdownItem
          rightIcon={<Check_Icon />}
          notificationTime="Friday, 12/05/2020, 9 a.m"
        >
          <p className="dropdown-item-header-title">
            new proposal has been sent to your post
          </p>
          <span></span>
        </DropdownItem>
        <DropdownItem
          rightIcon={<Check_Icon />}
          notificationTime="Friday, 12/05/2020, 9 a.m"
        >
          <p className="dropdown-item-header-title">
            new proposal has been sent to your post
          </p>
          <span></span>
        </DropdownItem>
        <DropdownItem
          rightIcon={<Check_Icon />}
          notificationTime="Friday, 12/05/2020, 9 a.m"
        >
          <p className="dropdown-item-header-title">
            new proposal has been sent to your post
          </p>
          <span></span>
        </DropdownItem>
      </div>
    </div>
  );
}

const mapStateToProps = ({usersReducer})=>{

  return {
    userInAuth:usersReducer.userInAuth
  }

}
const mapDispatchToProps = (dispatch) => {

  return {
    userLogout:()=>dispatch((userLogout()))
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Nav);
