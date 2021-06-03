import React from "react";
import Form from "../../components/form/form";
import "./login.scss"
import googleIcon from "../../icons/GoogleIcon.svg"

class LoginForm extends React.Component{


    constructor(props){

        super(props);

        this.state={


        }
    }

    render(){

      
        const formInputs=[
           
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
                innerText:"Login Account",
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
                innerText:"Login with Google",
                color:"black", 
                displayType:"block",
                width:"100%",
                margin:"2.5rem 0",
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                icon:googleIcon
                
            }
        ]
        return <div className="login-form ">

            <Form   type="login" formInputs={formInputs} formButtons={formButtons}></Form>

        </div>
    }
}
export default LoginForm;