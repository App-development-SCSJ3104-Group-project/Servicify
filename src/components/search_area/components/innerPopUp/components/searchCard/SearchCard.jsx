import React from "react";
import "./SearchCard.scss"
import imgs from "./tradesman-insurance 2.png"
import { ReactComponent as Heart } from "../../../../../../icons/icons8-heart-30 (1) 1.svg";
import Save from "../../../../../../icons/outline_book_white_24dp 1 (2).svg";
import BlackStar from "../../../../../../icons/outline_star_black_24dp 1 (1).svg"
import { Link } from "react-router-dom"
import defaultImg from "../../../../../../icons/defaultUser.svg"

const SearchCard = (props) => {

    const { data } = props;

    return (

        <Link className="search-card" to={{ pathname: "/customer_service_provider_page", state: { data: data } }} style={{ textDecoration: "none", color: "black" }}>
            <div className="search-card">

                <img style={{ borderRadius: "50%" }} src={data.imgSrc ? data.imgSrc : defaultImg} alt="img" className="search-card__img" />
                <div className="search-card__text">
                    <div className="search-card__text__name">{data.firstName} {data.lastName}</div>
                    <div className="search-card__text__rate">{data.rate != null ? data.rate : "No Ratings"} <span> {data.rate != null ? <img src={BlackStar} alt="" className="search-card__text__rate__black-star" /> : null} </span></div>
                </div>

                <div className="search-card__buttons-group">

                    <button className="search-card__buttons-group__button"><Heart></Heart></button>
                    <button className="search-card__buttons-group__button"> <img src={Save}></img> </button>

                </div>
            </div>
        </Link>
    )
}

export default SearchCard;