import "./card.scss"

const card = (props) => {

    const { scaleUp, mainColor, verticalCard, hideImg,width } = props;


    const style = {
        width: ` 70rem`,
        backgroundColor: mainColor
    }

    return (
        <div className={`profile_card ${verticalCard ? "profile_card__vertical" : null}`} style={scaleUp === true ? style : mainColor ? { backgroundColor: mainColor } : {width:width}} onClick={props.callback} data-name={props.data}>


            {hideImg !== true ? <div className={`profile_card__image ${verticalCard ? "profile_card__vertical__img" : null}`} >
                {props.image_src !== undefined ? <img src={props.image_src} alt="" /> : null}
            </div> : null}

            {props.children}
        </div>
    )
}

export default card;