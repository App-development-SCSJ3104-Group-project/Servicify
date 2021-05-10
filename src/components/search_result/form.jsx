import React from "react";

const FilterForm = ({ type, placeholder }) => {
  return (
    <div className="max-section">
      <p>{type}</p>
      <input
        style={{
          border: "none",
          borderRadius: "8px",
          width: "50px",
          height: "25px",
        }}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FilterForm;
