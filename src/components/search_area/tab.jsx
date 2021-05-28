import React from "react";
import "./search_area.css"

const NavigationTab = ({ currentTab, lastTab, tabName }) => {
  return (
    <div
      className="tab"
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
    </div>
  );
};

export default NavigationTab;
