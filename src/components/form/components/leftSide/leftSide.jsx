
import React from 'react'

import OrangeDots from "../../../../icons/OrangeDots.svg";
import RedCircles from "../../../../icons/RedCircles.svg";
import Quotations from "../../../../icons/Quotations.svg";
import WhiteArrow from "../../../../icons/WhiteArrow.svg";
import Check from "../../../../icons/Check.svg";
const LeftSide = (style) => {
    

    return (
        
         <div className="form__left-side " style={style}>
          <img
            src={OrangeDots}
            alt=""
            className="form__left-side__orange-dots"
          />
          <img
            src={RedCircles}
            alt=""
            className="form__left-side__red-circles"
          />

          <div className="form__left-side__main-content">
            <div className="form__left-side__main-content__text">
              <p className="form__left-side__main-content__paragraph">
                The passage experienced a surge in popularity during the 1960s
                when Letraset used it on their dry-transfer sheets, and again
                during the 90s as desktop publishers bundled the text with their
                software.
              </p>
              <div className="form__left-side__main-content__user-name">
                Vincet Obi{" "}
                <img
                  src={Check}
                  alt=""
                  className="form__left-side__main-content__user-name__check"
                />
              </div>
            </div>

            <img
              src={WhiteArrow}
              alt=""
              className="form__left-side__white-arrow"
            />
            <img
              src={Quotations}
              alt=""
              className="form__left-side__quotation"
            />
          </div>
        </div>
    )
}

export default LeftSide;