import React, { Component } from "react"
import "./card.scss"
import profileIcon from "../profile_card/Ellipse (3).svg";

const card = (props) => {

    const style = {
        width: props.width
    }

    return (
        <div className="profile_card" style={style}>


            <div className="image_block">
                <img src={profileIcon} alt="" />
            </div>


            {props.children}
        </div>
    )
}

export default card;