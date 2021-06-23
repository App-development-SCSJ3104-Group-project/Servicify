import React from "react";
import "./search_area.css"
import {  Link } from "react-router-dom";

{/* <Link to="/login" style={{ textDecoration: "none" }}>
        
        </Link> */}
const NavigationTab = ({ currentTab, lastTab, tabName,linkTo }) => {

  // console.log(linkTo)
  // link gets redirected to same page if the link to props is undefined
  return (
   <Link to={linkTo!==undefined?linkTo:window.location.href.split("/")[3]} style={{textDecoration:"none",color:"white"}}>
   
   <div
      className="tab search-nav-tab"
      // style={
      //   lastTab ? { position: "absolute", bottom: "0", right: "0" } : {}
      // }
    >
      <p className="tab_style"
        style={
          currentTab
            ? { borderBottom: "4px solid #ff835c", borderRadius: "0" }
            : {}
        }
      >
        {tabName}
      </p>
    </div></Link>
  );
};

export default NavigationTab;
