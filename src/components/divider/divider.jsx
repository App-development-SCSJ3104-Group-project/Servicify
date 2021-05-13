import React, { Component } from "react";
import "./divider.scss"

const divider = ({ width, backgroundColor, height, marginTop, marginBottom }) => {


    const style = {

        backgroundColor: backgroundColor,
        width,
        height,
        marginTop,
        marginBottom
    }

    return (

        <div class="divider" style={style}>

        </div>
    );
}

export default divider;