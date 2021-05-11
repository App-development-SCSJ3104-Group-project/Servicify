

import React from "react";
import "./button.scss"
const CustomButton=({backGroundColor,innerText,color,boxShadow,type,displayType,width,height,margin,icon,borderRadius})=>{


    const style={

        backgroundColor:backGroundColor,
        color:color,
        display:displayType,
        width,
        height,
        margin,
        boxShadow,borderRadius
    }


    return(

        <button type={type} className="custom-button" style={style}  >
        {icon?<img className="button-icon" src={icon}></img>:null}{innerText}
        </button>
    )
}

export default CustomButton;