import React from "react";

const NavigationTab = ({ currentTab, lastTab, tabName }) => {
  return (
    <div
      className="tab"
      style={
        lastTab ? { position: "absolute", bottom: "0", left: "99rem" } : {}
      }
    >
      <p
        style={
          currentTab
            ? { borderBottom: "4px solid #ff835c", borderRadius: "4px" }
            : {}
        }
      >
        {tabName}
      </p>
    </div>
  );
};

export default NavigationTab;
