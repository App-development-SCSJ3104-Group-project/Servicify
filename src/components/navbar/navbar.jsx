import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar-section">
        <div className="logo-section">
          <p className="logoname">E-service Application</p>
        </div>
        <div className="access-management">
          <button className="btnlogin">login</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
