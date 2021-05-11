import React, { Component } from "react";
import "./navbar.css";
import CustomButton from "../button/button";
import {Router,Link} from "react-router-dom"
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
        <div className="access-management">
                   <Link to="/login" style={{textDecoration:"none"}}>
          <CustomButton innerText="Login" margin="1rem" color="white" backGroundColor="#ff835c" width="10rem" height="4rem" borderRadius="10px" ></CustomButton>
           </Link>
          <Link to="/signup" style={{textDecoration:"none"}}>
          <CustomButton innerText="Signup" color="white" backGroundColor="#313641" width="12rem" borderRadius="10px"  margin="1rem" height="4rem"></CustomButton>
           </Link>

        </div>
      </nav>
    );
  }
}

export default Navbar;
