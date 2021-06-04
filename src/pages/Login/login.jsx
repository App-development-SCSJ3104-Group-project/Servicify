import React from "react";
import Form from "../../components/form/form";
import "./login.scss"
import mainImg from "../../icons/form-img-1.png"
import orangeDots from "../../icons/form-orange-group.png";
import  redCircles from "../../icons/red-circle.png";
import  quotation from "../../icons/“.png";
import  whiteArrow from "../../icons/white-arrow.png";
import  check from "../../icons/check.png";
import googleIcon from "../../icons/google.png"

class LoginForm extends React.Component{


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
        return <div className="login-form">

            <Form  {...imageAssets} type="login" formInputs={formInputs} formButtons={formButtons}></Form>

        </div>
    }
}
export default LoginForm;

// const mapStateToProps = (state) => {
//     return {
//       name: state.main.posts
//     }
//   }
  
//   const mapDispatchToProps = (dispatch) => {
  
//     return {
//       // import action from //???? action file
//       // addPost: (id) => { dispatch(addPost(id)) }
  
//     }
//   }
//   export default connect(mapStateToProps)(CustomerMain)