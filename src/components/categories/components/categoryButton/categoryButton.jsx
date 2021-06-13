
import React from "react";

const CategoryButton = ({ category }) => {
  return (
    <div className={`item1 categoryContainer`}>
      <button className="btncategory">{category}</button>
    </div>
  );
};
export default CategoryButton;