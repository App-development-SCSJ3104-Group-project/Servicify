import React, { Component } from "react";
import Nav from "../../components/navbar/navbar";
import SearchArea from "../../components/search_area/search_area";
import Footer from "../../components/footer/footer";
import Card from "../../components/card/card";
import Divider from "../../components/divider/divider";
import Button from "../../components/button/button";
import ProfileCard from "../../components/profile_card/profile_card";
import Icon from "../../components/icon_component/icon";

import notification from "../customer_service_main_page/outline_notification_important_black_48dp 1.svg";
import favorite from "../../components/profile_card/icons8-heart-30 (1) 1.svg"

import "../landing_page/landing_page.scss";
import "./customer_saved_screen.scss";

class CustomerSavedScreen extends Component {

    constructor(props) {
        super(props)
        this.state = props;
    }
    render() {
        const mockUsers = [
            {
                title: "Kodo Mozo",
                rate: 4,
                payment: 54.0,
                description:
                    "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?",
            },
            {
                title: "Kodo Mozo",
                rate: 4,
                payment: 54.0,
                description:
                    "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?",
            },
            {
                title: "Kodo Mozo",
                rate: 4,
                payment: 54.0,
                description:
                    "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?",
            },
            {
                title: "Kodo Mozo",
                rate: 4,
                payment: 54.0,
                description:
                    "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?",
            },
            {
                title: "Kodo Mozo",
                rate: 4,
                payment: 54.0,
                description:
                    "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?",
            },
            {
                title: "Kodo Mozo",
                rate: 4,
                payment: 54.0,
                description:
                    "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?",
            },
        ];

        return (
            <div className="landing-page">

                <Nav isLogged={true} />
                <SearchArea route={"favorites"} />

                <div className="saved_body">

                    <h3>Favorite categories</h3>
                    <br />
                    <div className="fav_categories">

                        <Card width="25rem">
                            <div className="cat_spec">

                                <h4>Mechanical Engineering</h4>
                                <div className="button_ab">

                                    <Button
                                        innerText={null}
                                        margin="0.3rem"
                                        iconPosition="false"
                                        color="black"
                                        backGroundColor="#1E2833"
                                        width="4rem"
                                        height="4rem"
                                        icon={favorite}
                                        borderRadius="50%"
                                    />
                                </div>
                            </div>
                        </Card>


                    </div>
                    <div className="sizedBox" style={{ height: "10rem" }}>

                    </div>
                    <h3>Favorite service providers</h3>
                    <br />
                    <div className="fav_categories">

                        {mockUsers.length != 0 ? (
                            mockUsers.map((e) => [
                                <ProfileCard data={e} />,
                                (mockUsers.indexOf(e) + 1) % 3 === 0 ? (
                                    <Divider
                                        width="100%"
                                        height="0.2rem"
                                        backgroundColor="grey"
                                        marginBottom="3rem"
                                        marginTop="3rem"
                                    />
                                ) : null,
                            ])
                        ) : (
                            <div className="empty">
                                <Icon width="10rem" height="10rem" src={notification} />
                                <br />
                                <h4>No results was found</h4>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />

            </div >
        )
    }

}


export default CustomerSavedScreen;

