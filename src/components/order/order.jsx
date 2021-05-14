import React from "react";
import "./order.scss";
import  Reciept from "./outline_receipt_long_white_24dp 1.png"
import  Replay from "./outline_replay_white_24dp 1.png"
import { ReactComponent as FilledStar } from './svg/star.svg';
import { ReactComponent as BlackStar } from './svg/outline_star_black_24dp 1.svg';

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
                    <span> 4.5 <BlackStar></BlackStar>
</span>
                </div>
                <div className="order__info__order">

                    27 minutes ago/Johor Bahru/Cash
                </div>

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