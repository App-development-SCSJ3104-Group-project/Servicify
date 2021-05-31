import React from "react";

import "./FeedbackPopUp.scss";

import { ReactComponent as Star } from "../../svg/star.svg";

import { ReactComponent as CloseIcon } from "../../svg/close.svg";


import CustomButton from "../../../../components/button/button"
class FeedbackPopUp extends React.Component{

    constructor(props){

        super(props);

        this.state={

            textValue:null,
            starClickingInfo:{
                status:false,
                clickedIndex:null
            }
        }
    }

    manageStarsHoverment=(color,hoveredStarIndex)=>{
        const {starClickingInfo}=this.state;
        document.querySelectorAll(`.feedbackPopUp__rate__star`).forEach((star,index)=>{

            if(starClickingInfo.status==false){
                if(index<=hoveredStarIndex){
                                            star.style.fill=color
                                        }
                                        else return
            }
            else{
                if(index<=hoveredStarIndex&&index>starClickingInfo.clickedIndex){
                                            star.style.fill=color
                }
            }
                                        
                                    })
    }
    //manage stars state
    manageStars=(clickedStarIndex)=>{

        this.setState({
           starClickingInfo:{
               status:true,
               clickedIndex:clickedStarIndex
           }
        })
        document.querySelectorAll(".feedbackPopUp__rate__star").forEach((star,index)=>{
            index<=clickedStarIndex?star.style.fill="goldenrod":star.style.fill="black"
        })
        
    }
    //used in order to not repeat code
    getStars=()=>{
        let stars=[]
        for(let i=0;i<5;i++){
            stars.push(
            <Star className="feedbackPopUp__rate__star" id={`star-${i}`} onMouseOver={(e)=>this.manageStarsHoverment("goldenrod",i)} onMouseOut={(e)=>this.manageStarsHoverment("black",i)} 
            onClick={(e)=>{
                this.manageStars(i)
            }}
            />  )
                                    
        }
        return stars;
    }
    handleTextChange=(e)=>{
        this.setState({
            textValue:e.target.value
        })
    }

    render(){
        
   const {popUpType,submitCallBack,Header,closeCallBack}=this.props;
   const{textValue,starClickingInfo} =this.state;

        return (

            <form className="feedbackPopUp animate__animated animate__fadeIn" onSubmit={(e)=>{
                submitCallBack({
                    text:textValue,
                    rating:(starClickingInfo.clickedIndex+1)
                });
                e.preventDefault()
            }}>


        <div className="feedbackPopUp__header">{Header}</div>

        <div className="feedbackPopUp__textSection">
            <textarea value={this.state.textValue} onChange={this.handleTextChange} name="description" className="feedbackPopUp__textSection__input" placeholder="write the description here ..." ></textarea>
        </div>

        {popUpType=="feedback"??<div>stars</div>}

            <div className="feedbackPopUp__buttons-group">
<CustomButton
 innerText="x" backGroundColor="#1E2833" color="white" type="submit" width="4rem"
                height="4rem" borderRadius="50%" displayType="inline-block" margin="0rem 1rem" onClick={()=>{

                    this.state.textValue="";
                    closeCallBack()
                }} ></CustomButton>
 <CustomButton
 innerText="Submit" backGroundColor="#1E2833" color="white" type="submit" width="10rem"
                height="4rem" borderRadius="22px" displayType="inline-block"  ></CustomButton>
            </div>

            <div className="feedbackPopUp__rate">
               
               {
                   this.getStars()
               }
                                
                            </div>

            </form>

        )
    }



}
               

// const CustomButton = ({ backGroundColor, innerText, color, boxShadow, type, displayType, width, height, margin, icon, borderRadius, onClick, iconPosition, iconWidth = "1.6rem", iconHeight = "1.6rem" }) => {
export default FeedbackPopUp;