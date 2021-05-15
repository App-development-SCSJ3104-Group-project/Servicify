import React from "react";
import "./icon_component.scss";

const icon = (props) => {

    const style = {
        height: props.height,
        width: props.width,
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
    }

    return (
        <div style={styleDiv}>
            <img src={props.src} alt="" style={style} />
        </div>

    );
};

export default icon;
