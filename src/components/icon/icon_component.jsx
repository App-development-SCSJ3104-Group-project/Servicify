import React from "react";
import "./icon_component.scss";

const icon = (props) => {

    const style = {
        height: props.height,
        width: props.width,
        innerText: props.innerText,
    }

    const styleDiv = {
        height: props.heightDiv,
        width: props.widthDiv,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fill: "white",
        cursor:"pointer"
    }

    return (
        <div 
// @ts-ignore
        style={styleDiv}>
            {props.src !== null ? <img src={props.src} alt="" style={style} /> : <h4>{props.innerText}</h4>}

        </div>

    );
};

export default icon;
