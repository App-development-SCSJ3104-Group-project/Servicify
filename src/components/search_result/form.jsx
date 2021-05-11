import React from "react";

const FilterForm = ({ placeholder }) => {
  return (
    <div className="max-section">
      <input
        style={{
          border: "none",
          borderRadius: "2px",
          width: "70px",
          height: "30px",
        }}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FilterForm;
