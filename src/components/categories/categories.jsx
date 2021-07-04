import React from "react";
import "./categories.scss";
import CategoryButton from "./components/categoryButton/categoryButton"

import Slide from 'react-reveal/Slide';

const Categories = () => {

  let categories = ["Farming & plantings", "Electric Expert", "Pet Care", "Plumbing work", "Mechnical guy", "Barbershop", "Cleaning Houses", "Electronics", "Construction", "Maintaince", "wedding food", "Farming & plantings"]

  return (

    <div className="categories-section-container">

      <div className="categories-section-container__headline">
        <p>
          <span className="categories-section-container__headline__highlighted-word">Hire</span> a pro for any service you
          want
        </p>
      </div>
      <div className="row">

        <div className="col-md-4">

          <Slide left>

            <div className="categories-section-container__items">

              {
                categories.map((category) => <CategoryButton category={category} ></CategoryButton>)
              }

            </div>
          </Slide>

        </div>

        <Slide right>

          <div className="col-md-7 ">
            <div className="categories-section-container__demo-image"></div>
          </div>

        </Slide>

      </div>

    </div>

  );
};



export default Categories;
