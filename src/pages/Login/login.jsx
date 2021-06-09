import React from "react";
import Form from "../../components/form/form";
import "./login.scss"
import googleIcon from "../../icons/GoogleIcon.svg"
// redux actions needs to be imported in an object destructruing way
import {fetchUsers, fetchUsersRequest, SubmitForm} from "../../redux/users/users_action"
import { connect } from "react-redux";

//using an action steps
// 1- import{action name} from action directory
// 2- const {action name }=this.props, destructing the action from props 
// note actions are treated similary to state props IT NEEDS TO BE PASSED USING PROPS
// 3-Add the imported action into the mapdispatchto props function
// NOTE Action needs to be called inside a callback, it can not be called directly 
// on a click function for example onclick={action.name()} is nto gonna work 
// but onclick={()=>action.name()} is the way it works
 

class LoginForm extends React.Component{


    constructor(props){

        super(props);

        this.state={


        }
    }
    
    render(){
            
        const { SubmitForm,submitted,loading,fetchUsersRequest,fetchUsers} = this.props;
        
        console.log(this.props)
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
        return <div className="login-form " onClick={ () => {
            fetchUsersRequest();
        }}>

            <Form   type="login" formInputs={formInputs} formButtons={formButtons} ></Form>

        </div>
    }
}

 


  const mapStateToProps=({usersReducer})=>({
    loading:usersReducer.loading,
    submitted: usersReducer.submitted,
    users:usersReducer.users
    
});
  const mapDispatchToProps = (dispatch) => {
  
    return {
      // import action from //???? action file
      // addPost: (id) => { dispatch(addPost(id)) }
        SubmitForm: () => { dispatch(SubmitForm()) },
        fetchUsersRequest:()=>{dispatch(fetchUsersRequest())},
        fetchUsers: () => { dispatch(fetchUsers()) },
  
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
  
