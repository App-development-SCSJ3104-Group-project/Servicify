import React, { Component } from "react";
import "./profile_card.scss"
import profileIcon from "./Ellipse (3).svg";
import Icon from "../icon_component/icon";
import star from "./Star.svg";
import notification from "./outline_notification_important_black_48dp 1.svg";
import favourite from "./icons8-heart-30 (1) 1.svg";
import order from "./outline_book_white_24dp 1.svg";
import Button from "../../components/button/button";

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { data } = this.props;

        return (

            <div>
                <div className="profile_card">

                    <div className="card_header">
                        <div className="image_block">
                            <img src={profileIcon} alt="" />
                        </div>
                        <div className="header">

                            <h5>{data.title}</h5>
                            <div className="rate">
                                <Icon width="1.6rem" height="1.6rem" src={star} />
                                <Icon width="1.6rem" height="1.6rem" src={star} />
                                <Icon width="1.6rem" height="1.6rem" src={star} />
                                <Icon width="1.6rem" height="1.6rem" src={star} />
                                <Icon width="1.6rem" height="1.6rem" src={star} />

                            </div>

                        </div>
                    </div>
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
                        <Button innerText={null}
                            margin="0.3rem"
                            color="black"
                            iconPosition='false'
                            backGroundColor="#1E2833"
                            width="4rem"
                            height="4rem"
                            icon={order}
                            borderRadius="50%" />


                    </div>
                </div>
            </div>

        );
    }
}

export default ProfileCard;
