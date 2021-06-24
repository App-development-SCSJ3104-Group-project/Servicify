import "./card.scss"

const card = (props) => {

    const { scaleUp } = props;

    
    const style = {
        width: ` 70rem`,
        height:`60rem`
    }
    const imgStyle = {
        height: props.imgHeight,
        width: props.imgWidth
    }
    const imgSize = {
        height: props.imgHsize,
        width: props.imgWsize
    }
    
    if (scaleUp) { imgStyle.left = "-10rem" }
    
    return (
        <div className="profile_card" style={scaleUp==true?style:null} onClick={props.callback} data-name={props.data}>


            <div className="image_block" style={imgStyle}>
                {props.image_src !== undefined ? <img src={props.image_src} style={imgSize} alt="" /> : null}
            </div>


            {props.children}
        </div>
    )
}

export default card;