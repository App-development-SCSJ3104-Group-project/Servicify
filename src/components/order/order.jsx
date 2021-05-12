import React from "react";
import "./order.scss";
import  Reciept from "./outline_receipt_long_white_24dp 1.png"
import  Replay from "./outline_replay_white_24dp 1.png"
class Order extends React.Component{


constructor(props){

    super(props);

    this.state={

    }
}

render(){
    const {userImg}=this.props;

    const style={
        backgroundImage: `url(${userImg})`,
    }
    return (

        <div className="order">

                {/* image is done using css now, needs to be converted to js */}
                <div className="order__user-img" style={style}></div>
             <div className="order__info">
                    <div className="order__info__user">
                    <span>John Smith</span>
                    <span> 4.5*</span>
                </div>
                <div className="order__info__order">

                    27 minutes ago/Johor Bahru/Cash
                </div>
               
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

        </div>
    )
}
}

export default Order;