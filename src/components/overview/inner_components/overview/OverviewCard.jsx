
import React from "react"

const OverviewCard = (props) => {

    return (
        <div className="overview-card__info__content" >
            <div className="overview-card__info__content__icon" style={{ animationDelay: `${props.index * .35}s` }}> <img src={props.logo.type}></img> </div>
            <div className="overview-card__info__content__desc" style={{ animationDelay: `${props.index * .5}s` }} >
                <p className="overview-card__info__content__desc__box" >{props.desc}</p>
            </div>
        </div>
    );
};
export default OverviewCard