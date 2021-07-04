import React from "react";
import "./SearchCard.scss"
import imgs from "./tradesman-insurance 2.png"
import { ReactComponent as Heart } from "../../../../../../icons/icons8-heart-30 (1) 1.svg";
import Save from "../../../../../../icons/outline_book_white_24dp 1 (2).svg";
import BlackStar from "../../../../../../icons/outline_star_black_24dp 1 (1).svg"

const SearchCard = () => {


    return (


        <div className="search-card">

            <img src={imgs} alt="img" className="search-card__img" />
            <div className="search-card__text">
                <div className="search-card__text__name">John Smith</div>
                <div className="search-card__text__rate">4.5 <span> <img src={BlackStar} alt="" className="search-card__text__rate__black-star" /> </span></div>
            </div>

            <div className="search-card__buttons-group">

                <button className="search-card__buttons-group__button"><Heart></Heart></button>
                <button className="search-card__buttons-group__button"> <img src={Save}></img> </button>

            </div>
        </div>
    )
}

export default SearchCard;