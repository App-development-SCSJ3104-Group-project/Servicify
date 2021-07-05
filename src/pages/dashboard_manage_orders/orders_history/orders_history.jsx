import React, { Component } from "react"
import DashboardCard from "../../../components/dashboard_card/dashboard_card"
import Card from "../../../components/card/card"
import IconButton from "../../../components/icon/icon_component"
import profileIcon from "../../../icons/Ellipse (3).svg";
import star from "../../../icons/filledStar.svg";
import printIcon from "../../../icons/outline_receipt_long_white_24dp 1.svg"

import "./orders_history.scss"

class OrdersHistory extends Component {

    constructor({ props }) {
        super(props)
        this.state = {
            found: false
        }
    }

    onClickCard = (event) => {

        const target = event.target.closest(".profile_card").lastChild
        target.classList.toggle("order-history-show_card")
    }
    render() {

        const { ordersList } = this.props
        return (
            <DashboardCard label={"Orders history"} >


                <div className="order-history-list">
                    {
                        ordersList.map((prop) => prop.status === "Done" ? [!this.state.found ? this.setState({ found: true }) : null, (
                            <Card
                                scaleUp={true}
                                image_src={prop.customer.imgSrc}
                                data={prop.name}
                                callback={this.onClickCard}
                            >
                                <div className="order-history-list__card">
                                    <div className="order-history-list__card__text">
                                        <div className="order-history-list__card__text__upper-section">
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
                                    <div className="order-history-list__card__buttons-container">

                                        <div className="proposal_status" style={{ cursor: `pointer`, width: "15rem" }}>
                                            <h4>{prop.status}</h4>
                                        </div>

                                        <IconButton
                                            heightDiv="5.0rem"
                                            widthDiv="5.0rem"
                                            borderRadius="5rem"
                                            backgroundColor="#1E2833"
                                            src={printIcon}
                                        />
                                    </div>
                                </div>
                                <div className="order-history-list__card__expansion-section">
                                    <br />
                                    <div className="order-history-list__card__expansion-section__flex-left-section">
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
                                    <div className="order-history-list__card__expansion-section__flex-right-section">
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
                            </Card>
                        )] : null
                        )
                    }
                    {!this.state.found ? <h1>Order history has no records</h1> : null}

                </div>

            </DashboardCard>)
    }
}
export default OrdersHistory