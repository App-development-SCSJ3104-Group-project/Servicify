import React from "react";
import Form from "../../components/form/form";
import "./login.scss"
import googleIcon from "../../icons/GoogleIcon.svg"
// redux actions needs to be imported in an object destructruing way
import {fetchUsers, fetchUsersRequest, SubmitForm} from "../../redux/users/users_action"

import {connect} from "react-redux";
class LoginForm extends React.Component{


    constructor(props){

        super(props);

        this.state={


        }
    }

    render(){
            
        const { SubmitForm,submitted,loading } = this.props;
        
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
        return <div className="login-form " onClick={async() => {
            await fetchUsersRequest();
            setTimeout(()=>console.log(loading),3000)
            
        }}>

            <Form   type="login" formInputs={formInputs} formButtons={formButtons}></Form>

        </div>
    }
}

 
   //userReducer is the name of the reducer that we want access its inner state
//    you need to specify the reducer in order to acess its inner state
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
        fetchUsers: () => { dispatch(fetchUsers()) },
        fetchUsersRequest:()=>{dispatch(fetchUsersRequest())}
  
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)