import React from "react";
import "./icon.css";

const icon = (props) => {
    return (

        <div className="icon">
            <img src={props.src} alt="" />
        </div>

    );
};

export default icon;
