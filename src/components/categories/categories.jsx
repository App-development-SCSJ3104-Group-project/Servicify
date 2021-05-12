import React from "react";
import CategoryButton from "./category_button";
import "./categories.css";

const Categories = () => {
  return (
    <div>
      <div class="section-headline">
        <p>
          <span class="starter-word">Hire</span> a pro for any service you want
        </p>
      </div>
      <div className="row pb-5">
        <div className="col-md-5">
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
        <div class="col-md-6 image-demo-section">
          <img
            class="demo-image"
            src="http://www.benjaminfranklinplumbing.com/images/blog/10-Reasons-Why-a-Professional-Plumber-Is-Better-Than-DIY-_-Katy-TX.jpg"
            alt="demo image"
            width="620px"
            height="375px"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
