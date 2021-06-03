import "./card.scss"

const card = (props) => {

    const style = {
        width: ` ${props.width} !important`,
        height: ` ${props.height} !important`
    }
    const imgStyle = {
        height: props.imgHeight,
        width: props.imgWidth
    }
    const imgSize = {
        height: props.imgHsize,
        width: props.imgWsize
    }

    return (
        <div className="profile_card" style={style} onClick={props.callback} data-name={props.data}>


            <div className="image_block" style={imgStyle}>
                {props.image_src !== undefined ? <img src={props.image_src} style={imgSize} alt="" /> : null}
            </div>


            {props.children}
        </div>
    )
}

export default card;