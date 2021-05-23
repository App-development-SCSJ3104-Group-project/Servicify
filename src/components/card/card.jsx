import React, { Component } from "react"
import "./card.scss"

const card = (props) => {

    const style = {
        width: props.width
    }
    const imgStyle = {
        height: props.imgHeight,
        width: props.imgWidth
    }

    return (
        <div className="profile_card" style={style}>


            <div className="image_block" style={imgStyle}>
                {props.image_src !== undefined ? <img src={props.image_src} alt="" /> : null}
            </div>


            {props.children}
        </div>
    )
}

export default card;