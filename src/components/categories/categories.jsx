import React from "react";
import "./categories.css";
import DemoImage from "../../icons/selfworker.jpg";

const Categories = () => {
  return (
    <div className="categories__section_container">
      <div className="categories_section-headline">
        <p>
          <span className="starter-word">Hire</span> a pro for any service you
          want
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="categories-section">
            <CategoryButton category="Farming & plantings" />
            <CategoryButton category="Electric Expert" />
            <CategoryButton category="Pet Care" />
            <CategoryButton category="Plumbing work" />
            <CategoryButton category="Barbershop" />
            <CategoryButton category="Mechnical guy" />
            <CategoryButton category="Cleaning Houses" />
            <CategoryButton category="Electronics" />
            <CategoryButton category="Construction" />
            <CategoryButton category="Maintaince" />
            <CategoryButton category="wedding food" />
            <CategoryButton category="Farming & plantings" />
          </div>
        </div>
        <div className="col-md-7">
          <img className="demo-image" src={DemoImage} alt="demo image" />
        </div>
      </div>
    </div>
  );
};

const CategoryButton = ({ category }) => {
  return (
    <div className="item1">
      <button className="btncategory">{category}</button>
    </div>
  );
};

export default Categories;
