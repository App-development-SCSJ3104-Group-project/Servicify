import React, { Component } from "react";
import "./navbar.css";
import CustomButton from "../button/button";
import { Router, Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar-section">
        <div className="logo-section">
          <p className="logoname">Servicify</p>
        </div>
        <div className="navigation-left-buttons">
          {this.getNavigationButtons(this.props.isLogged)}
        </div>
      </nav>
    );
  }
  getNavigationButtons = (isLogged) => {
    if (isLogged) {
      return (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <CustomButton
            innerText="Logout"
            margin="1rem"
            color="white"
            backGroundColor="#ff835c"
            width="12rem"
            height="4rem"
            borderRadius="10px"
          ></CustomButton>
        </Link>
      );
    } else {
      return (
        <React.Fragment>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <CustomButton
              innerText="Login"
              margin="1rem"
              color="white"
              backGroundColor="#ff835c"
              width="12rem"
              height="4rem"
              borderRadius="10px"
            ></CustomButton>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <CustomButton
              innerText="Signup"
              color="white"
              backGroundColor="#313641"
              width="12rem"
              borderRadius="10px"
              margin="1rem"
              height="4rem"
            ></CustomButton>
          </Link>
        </React.Fragment>
      );
    }
  };
}

export default Navbar;
