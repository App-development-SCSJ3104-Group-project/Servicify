
import React from "react";
import "./categoryButton.scss"
const CategoryButton = ({ category }) => {
  return (
    <div className={`item1 category-button-container`}>
      <button className="category-button-container__btn">{category}</button>
    </div>
  );
};
export default CategoryButton;