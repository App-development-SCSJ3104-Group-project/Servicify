import "./review.scss"
import Icon from "../icon_component/icon"
import RateRatio from "../rate_ratio/rate_ratio"
import Star from "../../icons/filledStar.svg"

const review = ({ }) => {
    return (
        <div className="review_card">

            <div className="review_card__header">
                <h2>Review</h2>

                <div className="review_card__header__icons">
                    <Icon margin={"0 .5rem"} height="4rem" width="4rem" src={Star} />
                    <Icon margin={"0 .5rem"} height="4rem" width="4rem" src={Star} />
                    <Icon margin={"0 .5rem"} height="4rem" width="4rem" src={Star} />
                    <Icon margin={"0 .5rem"} height="4rem" width="4rem" src={Star} />
                    <Icon margin={"0 .5rem"} height="4rem" width="4rem" src={Star} />
                    <h4 className="review_card__header__icons__text">5041 Reviews</h4>
                </div>

            </div>

            <div className="review_card__rate">
                <RateRatio width="50" index="5" />
                <RateRatio width="30" index="4" />
                <RateRatio width="10" index="3" />
                <RateRatio width="2" index="2" />
                <RateRatio width="8" index="1" />
            </div>

        </div>
    )
}

export default review;
