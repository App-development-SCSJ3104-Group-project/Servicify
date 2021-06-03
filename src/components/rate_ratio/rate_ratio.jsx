import Icon from "../icon_component/icon"
import Star from "../../icons/star.svg"
import "./rate_ratio.scss"

const rate_ratio = ({ index, width }) => {

    const active_Style = {
        height: "0.3rem",
        width: width + "%",
        backgroundColor: "gold",
    }

    const in_active_Style = {
        height: "0.3rem",
        width: 100 - width + "%",
        backgroundColor: "white",
    }

    return (
        <div className="review_rate_card">
            <h3>{index}</h3>
            <Icon height="4rem" width="4rem" src={Star} />
            <div className="rate_ratio">
                <div className="active" style={active_Style}></div>
                <div className="inActive" style={in_active_Style}></div>
            </div>
            <h3>{width}%</h3>


        </div>
    )


}

export default rate_ratio;