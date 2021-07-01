import React, { Component } from "react";
import "./profile_card.scss"
import profileIcon from "../../icons//Ellipse (3).svg";
import Icon from "../icon_component/icon";
import Star from "../../icons/star.svg";
import favourite from "../../icons/icons8-heart-30 (1) 1.svg";
import order from "../../icons/outline_book_white_24dp 1.svg";
import Button from "../../components/button/button";
import Card from "../../components/card/card";
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom";

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getStar = (data) => {

        let element = []
        for (let index = 0; index < data; index++) {
            element.push(< Icon width="1.6rem" height="1.6rem" src={Star} />)
        }

        return element

    }

    render() {
        const { data } = this.props;
        return (

            <Zoom>
                <Link to={"/customer_service_provider_page?id=" + data._id + "&type=" + data.jobName} style={{ textDecoration: "none", color: "black" }}>
                    <div>

                        <Card image_src={profileIcon} >

<<<<<<< HEAD
<<<<<<< HEAD
                <Card image_src={profileIcon}  >
=======
                    <Card image_src={profileIcon} >
>>>>>>> 428fc451e60ea8c757273957815fe0999b84b690
=======
                            <div className="header">
                                <div className="card_header">
                                    <h5>{data.firstName + " " + data.lastName}</h5>
                                    <div className="rate">
>>>>>>> 8ea7e07b1fe567cd8266e5edecb27654d9246d01

                                        {
                                            this.getStar(data.rate)
                                        }

                                    </div>
                                </div>
                            </div>
<<<<<<< HEAD
                        </div>
<<<<<<< HEAD
                    </div>
                    <div className="card_title">
                        <h5>50.00$</h5>
                    </div>
                    <div className="card_description">
                        <h6>Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?</h6>
                    </div>
                    <div className="action_buttons">
                        <Button innerText={null}
                            margin="0 0.1rem"
                            color="black"
                            iconPosition='false'
                            backGroundColor="#e76f51"
                            width="4rem"
                            height="4rem"
                            icon={favourite}
                            borderRadius="50%" />
                        <Button innerText={null}
                            margin="0 0.1rem"
                            color="black"
                            iconPosition='false'
                            backGroundColor="#e76f51"
                            width="4rem"
                            height="4rem"
                            icon={order}
                            borderRadius="50%" />

=======
                        <div className="card_title">
                            <h5>50.00$</h5>
                        </div>
                        <div className="card_description">
                            <h6>Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?</h6>
                        </div>
                        <div className="action_buttons">
                            <Button innerText={null}
                                margin="0.3rem"
                                color="black"
                                iconPosition='false'
                                backGroundColor="#1E2833"
                                width="4rem"
                                height="4rem"
                                icon={favourite}
                                borderRadius="50%" />
                            <Link to={"/customer_request_page?id=" + data._id + "&name=" + data.firstName}>
=======
                            <div className="card_title">
                                <h5>{data.diagnosingFees}$</h5>
                            </div>
                            <div className="card_description">
                                <h6>{data.jobDescription}</h6>
                            </div>
                            <div className="action_buttons">
>>>>>>> 8ea7e07b1fe567cd8266e5edecb27654d9246d01
                                <Button innerText={null}
                                    margin="0.3rem"
                                    color="black"
                                    iconPosition='false'
                                    backGroundColor="#1E2833"
                                    width="4rem"
                                    height="4rem"
                                    icon={favourite}
                                    borderRadius="50%" />
<<<<<<< HEAD
                            </Link>
>>>>>>> 428fc451e60ea8c757273957815fe0999b84b690
=======
                                <Link to={"/customer_request_page?id=" + data._id + "&name=" + data.firstName + " " + data.lastName}>
                                    <Button innerText={null}
                                        margin="0.3rem"
                                        color="black"
                                        iconPosition='false'
                                        backGroundColor="#1E2833"
                                        width="4rem"
                                        height="4rem"
                                        icon={order}
                                        borderRadius="50%" />
                                </Link>
>>>>>>> 8ea7e07b1fe567cd8266e5edecb27654d9246d01

                            </div>

                        </Card>
                    </div >
                </Link>
            </Zoom>
        )

    }
}

export default ProfileCard;
