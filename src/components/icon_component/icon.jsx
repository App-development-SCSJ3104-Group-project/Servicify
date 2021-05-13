import React from "react";
import "./icon.css";

const icon = (props) => {

    const style = {
        height: props.height,
        width: props.width,
    }
    return (

        <img src={props.src} alt="" style={style} />

    );
};

export default icon;
