import React from "react";
import "./order.scss";
import  Reciept from "./outline_receipt_long_white_24dp 1.png"
import  Replay from "./outline_replay_white_24dp 1.png"
import { ReactComponent as FilledStar } from './svg/star.svg';
import { ReactComponent as BlackStar } from "./svg/blackstar.svg"
import { ReactComponent as ArrowDown } from "./svg/arrow-down-sign-to-navigate.svg"
import { ReactComponent as ArrowUp } from "./svg/arrowup.svg"


class Order extends React.Component{


constructor(props){

    super(props);

    this.state={

        toggled:false,
        cardStyle:{
        height:"12rem"
    },
    textStyle:{
        overflow:"visible"
    }
    }
}

expandCard=()=>{

    this.setState({
        cardStyle:{
            height:"35rem"
        },
        toggled:true
    })
}
shrinkCard=()=>{

     this.setState({
        cardStyle:{
            height:"12rem"
        },
        toggled:false
    })
}
render(){
    const {userImg}=this.props;

    const style={
        backgroundImage: `url(${userImg})`,
    }
    const {cardStyle,textStyle,toggled}=this.state;
    return (

        <div className="order" style={cardStyle}>

                {/* image is done using css now, needs to be converted to js */}
                <div className="order__user-img" style={style}></div>
             <div className="order__info">
                    <div className="order__info__user">
                    <span>John Smith</span>
                    <span> 4.5 <BlackStar></BlackStar>
</span>
                </div>
                <div className="order__info__order  "  style={toggled?textStyle:null}>

                    27 minutes ago/Johor Bahru/Cash
                     <div className="order__extra-info__type">
                    <div>Type: Mechanical / Name: Mototrs / Time: 12:00 - 15:00</div>
                    <div>City: Johor Bahru / Day: Sunday / Date:15/05/2020 </div>
                    <div>Diagonsing fees: 10.00$ / Total fees:30.00$</div>
                    <div>Payment: Cash</div>
                    <div>Feedback: dummy text of the printing and typesetting industry. </div>
                    <div className="rate">
                        <span className="rate__text">Rate: </span>  <FilledStar className="filled-star" /> <FilledStar className="filled-star" /> <FilledStar className="filled-star" /><FilledStar className="filled-star" /><FilledStar className="filled-star" />
                    </div>
                </div>
                </div>
<span>
    {
    toggled?
    <ArrowUp className="arrow arrow-down" onClick={()=>this.shrinkCard()}></ArrowUp>:
    <ArrowDown className="arrow arrow-down" onClick={()=>this.expandCard()}></ArrowDown>
    }
    

</span>
             </div>
                 <div className="order__buttons-container">

                    <button className="order__buttons-container__feedback">Give FeedBack</button>

<button className="order__buttons-container__reciept">
    <img src={Reciept} alt=""/>
</button>
                    <button className="order__buttons-container__replay">
    <img src={Replay} alt=""/>

                    </button>
                </div>

                <div className="order__extra-info">
                


                </div>

           
        </div>
    )
}
}

export default Order;