import "./card.scss"

const card = (props) => {

    const { scaleUp, mainColor } = props;


    const style = {
        width: ` 70rem`,
        backgroundColor: mainColor

    }
   

    // if (scaleUp) { imgStyle.left = "-10rem" }

    return (
        <div className="profile_card" style={scaleUp === true ? style : mainColor ? { backgroundColor: mainColor } : null} onClick={props.callback} data-name={props.data}>


            <div className="profile_card__image" >
                {props.image_src !== undefined ? <img src={props.image_src}  alt="" /> : null}
            </div>


            {props.children}
        </div>
    )
}

export default card;