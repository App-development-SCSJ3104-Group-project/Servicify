import React from "react";
import Form from "../../components/form/form";
import "./signup.scss"
import mainImg from "../../images/form/form-img-1.png"
import orangeDots from "../../images/form/form-orange-group.png";
import  redCircles from "../../images/form/red-circle.png";
import  quotation from "../../images/form/“.png";
import  whiteArrow from "../../images/form/white-arrow.png";
import  check from "../../images/form/check.png";
import googleIcon from "../../images/icons/google.png"

class SignupForm extends React.Component{


    constructor(props){

        super(props);

        this.state={


        }
    }

    render(){

        const imageAssets={
            mainImg,
            orangeDots,
            redCircles,
            quotation,
            whiteArrow,
            check
        }
        const formInputs=[
            {
                type:"text",
                placeHolder:"Enter Full Name",
                displayType:"block",
                customLabel:"Full Name*",
                className:"form__right-side__innerForm__input-group"
            },
             {
                type:"text",
                placeHolder:"Enter Email Address",
                displayType:"block",
                customLabel:"Email Address*",
                className:"form__right-side__innerForm__input-group"
            },
             {
                type:"password",
                placeHolder:"Enter Password",
                displayType:"block",
                customLabel:"Password*",
                className:"form__right-side__innerForm__input-group"
            },
             {
                type:"checkbox",
                placeHolder:null,
                displayType:"inline-block",
                customLabel:"I agree to terms & conditions",
                className:"form__right-side__innerForm__input-group"
            }
        ]
           const formButtons=[

            {
                type:"button",
                backGroundColor:"#1565D8",
                innerText:"Register Account",
                color:"white", 
                displayType:"block",
                width:"100%",
                margin:"2.5rem 0",
                boxShadow:"none",
                icon:null

            },
             {
                type:"button",
                backGroundColor:"white",
                innerText:"Register with Google",
                color:"black", 
                displayType:"block",
                width:"100%",
                margin:"2.5rem 0",
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                icon:googleIcon
                
            }
        ]
        return <div className="signup-form">

            <Form  {...imageAssets} type="signup" formInputs={formInputs} formButtons={formButtons}></Form>

        </div>
    }
}
export default SignupForm;