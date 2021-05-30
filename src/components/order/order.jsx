import React from "react";
import "./order.scss";
import Reciept from "./outline_receipt_long_white_24dp 1.png"
import Replay from "./outline_replay_white_24dp 1.png"
import { ReactComponent as FilledStar } from './svg/star.svg';
import { ReactComponent as BlackStar } from "./svg/blackstar.svg"
import { ReactComponent as ArrowDown } from "./svg/arrow-down-sign-to-navigate.svg"
import { ReactComponent as ArrowUp } from "./svg/arrowup.svg"


class Order extends React.Component {


    constructor(props) {

        super(props);

        this.state = {

            toggled: false,
            cardStyle: {
                height: "12rem"
            },
            textStyle: {
                overflow: "visible"
            }
        }
    }
    expandCard = () => {

        this.setState({
            cardStyle: {
                height: "35rem"
            },
            toggled: true
        })
     
    }
    shrinkCard = () => {

        this.setState({
            cardStyle: {
                height: "12rem"
            },
            toggled: false
        })

    }


    render() {

        
        const { userImg,rating,orderedSince,city,day,date,diagonsingFees,totalFees,paymentType,feedback,name } = this.props;
        
        const style = {
            backgroundImage: `url(${userImg})`,
        }
        const { cardStyle, textStyle, toggled } = this.state;
       
        return (

            <div className="order" style={cardStyle}>

                {/* image is done using css now, needs to be converted to js */}
                <div className="order__user-img" style={style}></div>
                <div className="order__info">
                    <div className="order__info__user">
                        <span className="order__info__user__name"> {name}</span>
                        <span className="order__info__rating"> {rating} <BlackStar style={{marginLeft:".5rem"}}></BlackStar>
                        </span>
                  </div>
                    <div className={`order__info__order ${toggled?"visible":"hidden"}`} >

        {orderedSince}  ago / {city} / {paymentType}
                     <div className="order__extra-info__type">
                            <div className="order__extra-info__type__details"> <span>Type:  Mechanical</span> <span>/</span> <span>Name: Mototrs</span> <span>/</span> <span>Time: 12:00 - 15:00</span></div>
        <div className="order__extra-info__type__details"><span>City: {city}</span> <span>/</span> <span>Day: {day}</span> <span>/</span> <span>Date: {date}</span> </div>
        <div className="order__extra-info__type__details"><span>Diagonsing fees: {diagonsingFees}$</span> <span>/</span> <span>Total fees: {totalFees}$</span></div>
                            <div>Payment: {paymentType}</div>
                            <div>Feedback: {feedback}. </div>
                            <div className="rate">
                                <span className="rate__text">Rate: </span>  <FilledStar className="filled-star" /> <FilledStar className="filled-star" /> <FilledStar className="filled-star" /><FilledStar className="filled-star" /><FilledStar className="filled-star" />
                            </div>
                        </div>
                    </div>
                    <span>
                        {
                            toggled ?
                                <ArrowUp className="arrow arrow-down" onClick={() => this.shrinkCard()}></ArrowUp> :
                                <ArrowDown className="arrow arrow-down" onClick={() => this.expandCard()}></ArrowDown>
                        }


                    </span>
                </div>
                <div className="order__buttons-container">

                    <button className="order__buttons-container__feedback">Give FeedBack</button>

                    <button className="order__buttons-container__reciept">
                        <img src={Reciept} alt="" />
                    </button>
                    <button className="order__buttons-container__replay">
                        <img src={Replay} alt="" />

                    </button>
                </div>

                <div className="order__extra-info">



                </div>


            </div>
        )
    }
}


export default Order