import React, { Component } from "react"
import DashboardCard from "../../../components/dashboard_card/dashboard_card"
import Card from "../../../components/card/card"
import IconButton from "../../../components/icon/icon_component"
import profileIcon from "../../../icons/Ellipse (3).svg";
import star from "../../../icons/outline_star_black_24dp 1.svg";

import "./manage_request.scss"

class ManageRequests extends Component {

    constructor({ props }) {
        super(props)
        this.props = props
    }

    data = [
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
    ]

    onClickCard = (event) => {

        const target = event.target.closest(".profile_card").lastChild
        target.classList.toggle("show_card")
    }

    render() {

        const { requests, acceptRequest, loading } = this.props
        return (
            <DashboardCard label={"Orders history"} >

                <div className="list_of_cards">

                    {
                        loading ?
                            <div className="loading-div">
                                <div className="loader">Loading...</div>
                            </div>
                            :
                            requests.map(prop => (
                                [
                                    <Card imgHeight="15.0rem" scaleUp={true} imgWidth="15.0rem" width="50%" image_src={profileIcon} imgHsize="8rem" imgWsize="8rem" data={prop.name} callback={this.onClickCard}>

                                        <div className="order_header_card">
                                            <div className="order_header_card_left">
                                                <div className="part_one">
                                                    <h3>{prop.serviceProvider.firstName + " " + prop.serviceProvider.lastName}</h3>
                                                    <div className="rate_div">
                                                        <h3>4.5</h3>
                                                        <img src={star} alt="" />
                                                    </div>
                                                </div>
                                                <h3>{prop.time} / {prop.location} / {prop.payment}</h3>
                                            </div>
                                            <div className="right_float_button">
                                                <IconButton innerText={"Accept"} heightDiv="4.0rem" widthDiv="15.0rem"
                                                    borderRadius="5rem" backgroundColor="#1E2833" src={null} />
                                                <IconButton innerText={"Reject"} heightDiv="4.0rem" widthDiv="15.0rem"
                                                    borderRadius="5rem" backgroundColor="#1E2833" src={null} />
                                            </div>
                                        </div>
<<<<<<< HEAD
                                        <div className="right_float_button">
                                            <IconButton innerText={"Accept"} heightDiv="3.5rem" widthDiv="15.0rem"
                                                borderRadius="5rem" backgroundColor="rgb(231, 111, 81)" src={null} />
                                            <IconButton innerText={"Reject"} heightDiv="3.5rem" widthDiv="15.0rem"
                                                borderRadius="5rem" backgroundColor="rgb(231, 111, 81)" src={null} />
=======
                                        <div className="toggle_card">
                                            <br />
                                            <h3>City: {prop.location} </h3>
                                            <h3>Diagnosing fees: {prop.fees}</h3>
                                            <h3>Payment: {prop.payment}</h3>
                                            <h3>Description:{prop.description}</h3>
                                            <h3>Provision date:{prop.provisionDate}</h3>
                                            <h3>Time:{prop.time}</h3>
                                            <h3>Feedback: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia officiis ipsum. Praesentium, consequuntur. Mollitia aspernatur quibusdam cupiditate laboriosam quis?</h3>
                                            <h3>Rate: 3</h3>
>>>>>>> abd98cd666eaade41abd3ae9a723c22183680fef
                                        </div>
                                    </Card>,
                                    <br />
                                ]))
                    }
                </div>


            </DashboardCard>)
    }
}
export default ManageRequests