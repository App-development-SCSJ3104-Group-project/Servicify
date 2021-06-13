import "./card.scss"

const card = (props,{screenType}) => {

    const style = {
        maxWidth: ` ${props.width} !important`,
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
        <div className={`profile_card ${props.screenType=="manageRequests"?'managaRequestCard':null}`} style={style} onClick={props.callback} data-name={props.data}>


            <div className={`image_block ${props.screenType=="manageRequests"?'image-block-manage-requsts':null}`} style={imgStyle}>
                {props.image_src !== undefined ? <img src={props.image_src} style={imgSize} alt="" /> : null}
            </div>


            {props.children}
        </div>
    )
}

export default card;