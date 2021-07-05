import React from "react";
import "./tab.scss"
import { Link } from "react-router-dom";


const NavigationTab = ({ currentTab, tabName, linkTo,currentScreen }) => {

  // link gets redirected to same page if the link to props is undefined
  return (
    <Link to={linkTo !== undefined ? linkTo : window.location.href.split("/")[3]} style={{ textDecoration: "none", color: "white" }}>

      <div
        className="browse-area__tab-container"

      >
        <p className={`browse-area__tab-container__content ${currentTab ? "browse-area__tab-container__content__active" : null}`}
        >
          {tabName}
        </p>
      </div></Link>
  );
};

export default NavigationTab;
