// @ts-nocheck
import React, { Component } from "react"
import DashboardCard from "../../../components/dashboard_card/dashboard_card"
import Card from "../../../components/card/card"
import Zoom from 'react-reveal/Fade'
import IconButton from "../../../components/icon/icon_component"

import "./current_order.scss"

class CurrentOrder extends Component {

    constructor({ props }) {
        super(props)
        this.state = {
            found: false
        }
    }
    onClickCard = (event) => {
        console.log("clicked parent")
        const target = event.target.closest(".profile_card").lastChild;
        // console.log(target.style);
        target.classList.toggle("current_order_show_card");
    };
    onChange = (event) => {
        console.log("clicked child")
        console.log(event.target);
    }

    render() {

        const { ordersList, finishOrder, loading } = this.props

        return (

            <DashboardCard label={"current order"} >

                <div className="current-order-list">
                    {
                        loading ? (
                            <div className="loading-div">
                                <div className="loader">Loading...</div>
                            </div>
                        ) : ordersList.map((prop) => prop.status !== "Done" ? [!this.state.found ? this.setState({ found: true }) : null, (
                            <Card
                                imgHeight="15.0rem"
                                scaleUp={true}
                                imgWidth="15.0rem"
                                width="50%"
                                image_src={prop.customer.imgSrc}
                                imgHsize="8rem"
                                imgWsize="8rem"
                                data={prop.name}
                                callback={this.onClickCard}
                            >
                                <div className="current-order-list__card">
                                    <div className="current-order-list__card__text">
                                        <div className="current-order-list__card__text__upper-section">
                                            <h3>
                                                {prop.customer.firstName +
                                                    " " +
                                                    prop.customer.lastName}
                                            </h3>
                                        </div>
                                        <h3>
                                            {prop.responseTime} / {prop.location} / {prop.paymentMethod}
                                        </h3>
                                    </div>
                                    <div className="current-order-list__card__buttons-container">
                                        {
                                            <div onClick={() => {
                                                const data = JSON.parse(localStorage.getItem("user"));
                                                finishOrder(prop._id);
                                                setTimeout(() => {
                                                    window.location.reload();
                                                }, 500);
                                            }}>

                                                <IconButton
                                                    innerText={"Done"}
                                                    heightDiv="4.0rem"
                                                    widthDiv="15.0rem"
                                                    borderRadius="5rem"
                                                    backgroundColor="rgb(30, 40, 51)"
                                                    src={null}
                                                />
                                            </div>
                                        }
                                        <br />
                                        <IconButton
                                            innerText={prop.status}
                                            heightDiv="4.0rem"
                                            widthDiv="15.0rem"
                                            borderRadius="5rem"
                                            backgroundColor="#57c4e5"
                                            src={null}
                                        />
                                    </div>
                                </div>
                                <Zoom >
                                    <div className="current-order-list__card__expansion-section">
                                        <br />
                                        <div className="current-order-list__card__expansion-section__flex-left-section">
                                            <h3><b>Problem details:</b> {prop.problemDescription} </h3>
                                            <h3>Service details: {prop.serviceDescription} </h3>
                                            {prop.steps.length !== 0 ? <h3><b>Steps:</b></h3> : null}
                                            {prop.steps.length !== 0 ? <ol>{prop.steps.map((e) => <li><h5>{e}</h5></li>)}</ol> : null}
                                            {
                                                prop.isFeedbackGiven ?
                                                    [<h3>
                                                        <b>Feedback:</b> {prop.feedback}
                                                    </h3>,
                                                    <h3><b>Rate:</b> {prop.rate}</h3>
                                                    ] : null
                                            }
                                        </div>
                                        <div className="divider-v"></div>
                                        <div className="current-order-list__card__expansion-section__flex-right-section">
                                            <div>
                                                <h3><b>City:</b> {prop.location} </h3>
                                                <h3><b>Payment:</b> {prop.paymentMethod}</h3>
                                                <h3><b>Provision date:</b> {prop.provisionDate}</h3>
                                                <h3><b>Time:</b> {prop.responseTime}</h3>
                                            </div>
                                            <div className="divider-h"></div>
                                            <div>
                                                <h3><b>Diagnosing fees:</b> {prop.serviceProvider.diagnosingfees}</h3>
                                                <h3><b>Service fees:</b> {prop.serviceFees}</h3>
                                                <h3><b>Total payment:</b> {prop.serviceFees + prop.serviceProvider.diagnosingfees}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>

                            </Card>
                        )] : null
                        )
                    }
                    {!this.state.found ? <h1>No Ongoing orders</h1> : null}

                </div>
            </DashboardCard >

        )
    }


}
export default CurrentOrder

