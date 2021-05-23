import React from "react";

const NavigationTab = ({ currentTab, lastTab, tabName }) => {
  return (
    <div
      className="tab"
      // style={
      //   lastTab ? { position: "absolute", bottom: "0", right: "0" } : {}
      // }
    >
      <p
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
