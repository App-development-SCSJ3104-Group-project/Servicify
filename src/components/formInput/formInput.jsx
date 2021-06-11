
import React from "react";

import "./formInput.scss";
const FormInputGroup=({type,placeHolder,displayType,className,customLabel,onChange,missing})=>{

    const labelClassName=`${className}__label`;
    const inputClassName=`${className}__input-field`
    return (

        <div>

                <div className={`${className} ${missing}`}>
                    {
                        displayType=="block"? <div className={labelClassName} style={{display:displayType}}>{customLabel}</div>:null
                    }
                           
                <input className={inputClassName} placeholder={placeHolder ? placeHolder : ""} type={type} onChange={(e)=>onChange(e.target.value)}/>
                    {
                        displayType=="inline-block"? <div className={labelClassName} style={{display:displayType}}>{customLabel}</div>:null
                    }
                        </div>
        </div>
    )
}

export default FormInputGroup;