import React from "react";

const FilterCategory = ({ categoryName }) => {
  return (
    <li>
      <input type="checkbox" style={{ color: "#f2f6f9" }} />
      <span style={{ marginLeft: "7px" }}>{categoryName}</span>
    </li>
  );
};

export default FilterCategory;
