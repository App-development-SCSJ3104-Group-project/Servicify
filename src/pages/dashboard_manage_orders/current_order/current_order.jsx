import React, { Component } from "react"
import DashboardCard from "../../../components/dashboard_card/dashboard_card"
import Button from "../../../components/button/button"

import "./current_order.scss"

class CurrentOrder extends Component {

    constructor({ props }) {
        super(props)
        this.props = props
    }

    render() {

        return (

            <DashboardCard label={"current order"} >

                <div className="current_order_body">

                    <div className="current_order_status">
                        {
                            this.props.orderStatus.map(e => (

                                <div className={e.status ? "current_order_status_card active_card" : "current_order_status_card"} data-name={e.name}>
                                    <img src={e.icon} alt="" onClick={this.props.callback} />
                                    <br />
                                    <h3>{e.name}</h3>
                                </div>
                            ))
                        }
                    </div>

                    <div className="current_order_grid">

                        <div className="current_order_grid_con">

                            <div className="flex_in">
                                <h3>Client:</h3>
                                <input className="input" type="text" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Phone no:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Country:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>City:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Day:</h3>
                                <input className="input" type="number" readOnly />
                            </div>

                        </div>
                        <div className="current_order_grid_con">
                            <div className="flex_in">
                                <h3>Payment method:</h3>
                                <input className="input" type="text" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Site profit:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Time Range:</h3>
                                <input className="input" type="date" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Diagnosing fees:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                            <div className="flex_in">
                                <h3>Total Payment:</h3>
                                <input className="input" type="number" readOnly />
                            </div>
                        </div>

                    </div>
                    <div className="btn-cancel">

                        <Button innerText={"Cancel"}
                            margin="0.3rem"
                            color="white"
                            iconPosition='false'
                            backGroundColor="#1E2833"
                            width="10rem"
                            height="4rem"
                            borderRadius="2rem" />
                    </div>
                </div>

            </DashboardCard>


        )
    }
}
export default CurrentOrder