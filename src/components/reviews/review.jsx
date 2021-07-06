import "./review.scss"
import Icon from "../icon_component/icon"
import RateRatio from "../rate_ratio/rate_ratio"
import Star from "../../icons/filledStar.svg"

const review = ({ rate }) => {

    const getRatingStars = () => {

        let stars = []
        console.log(rate)

        for (let i = 0; i < rate; i++) {

            stars.push(<Icon margin={"0 .5rem"} height="4rem" width="4rem" src={Star} />)
        }

        console.log(stars)
        return stars;

    }
    const getRatingRatio = () => {

        let ratingRatio = []


        for (let i = 0; i < 5; i++) {

            if (rate != null) {
                if (i === (rate - 1)) {
                    ratingRatio.push(<RateRatio width="60" index={`${i + 1}`} />)
                }
                else {
                    ratingRatio.push(<RateRatio width="10" index={`${i + 1}`} />)
                }
            }
            else {

                ratingRatio.push(<RateRatio width="0" index={`${i + 1}`} />)
            }

        }


        return ratingRatio.reverse()
    }
    return (
        <div className="review_card">

            <div className="review_card__header">
                <h2>Review</h2>

                <div className="review_card__header__icons">

                    {getRatingStars()}
                    <h4 className="review_card__header__icons__text">5041 Reviews</h4>
                </div>

            </div>

            <div className="review_card__rate">
                {
                    getRatingRatio()

                }            </div>

        </div>
    )
}

export default review;
