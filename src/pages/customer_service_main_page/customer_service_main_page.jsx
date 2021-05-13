import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import SearchArea from "../../components/search_area/search_area";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import Divider from "../../components/divider/divider";
import ProfileCard from "../../components/profile_card/profile_card";
import dropDownIcon from "./outline_arrow_back_ios_white_24dp 1.svg";

import "../landing_page/landing_page.scss";
import "./customer_service_main_page.scss";
class CustomerServiceMainPage extends Component {
    render() {
        const tabs = [
            { name: "overview", isActive: false },
            { name: "services", isActive: true },
            { name: "posts", isActive: false },
            { name: "orders", isActive: false },
            { name: "favorites", isActive: false },
            { name: "requests", isActive: false },
            { name: "profile", isActive: false, lastTab: true },
        ];
        const buttons = [
            { name: "Fees", isActive: false, type: "fees", backgroundColor: "#1E2833", color: "white" },
            { name: "Rate", isActive: false, type: "rate", backgroundColor: "#1E2833", color: "white" },
            { name: "Location", isActive: false, type: "location", backgroundColor: "#1E2833", color: "white" },
            { name: "Payment", isActive: false, type: "payment", backgroundColor: "#1E2833", color: "white" },
            { name: "Reset", isActive: false, type: "reset", backgroundColor: "#FF835C", color: "white" },
        ];
        const categories = ['Tech', 'Tech', 'Tech', 'Tech', 'Tech', 'Tech', 'Tech', 'Tech', 'Tech', 'Tech'];
        const mockUsers = [
            { title: "John William", rate: 5, payment: 50.00, description: "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?" },
            { title: "Ahmad Mousa", rate: 3, payment: 520.00, description: "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?" },
            { title: "John William", rate: 5, payment: 52.00, description: "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?" },
            { title: "William William", rate: 2, payment: 10.00, description: "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?" },
            { title: "Kodo Mozo", rate: 4, payment: 54.00, description: "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?" },
            { title: "Kodo Mozo", rate: 4, payment: 54.00, description: "Lorem ipsum, odit debitis harum voluptatem iure recusandae, iusto assumenda reprehenderit tenetur. Quo quis laboriosam tempore nulla praesentium, assumenda labore quae aperiam dolorem deleniti asperiores corrupti, voluptate veritatis amet nisi?" },
        ];

        return (
            <div className="landing-page">
                <Navbar isLogged={true} />
                <SearchArea tabs={tabs} />

                <div className="card_view">

                    <div className="categories">
                        <h4>Categories</h4>
                        <div className="items">
                            {
                                categories.map(e => (

                                    <Button innerText={"#" + e}
                                        margin="0.3rem"
                                        iconPosition='true'
                                        color="black"
                                        backGroundColor="#57C4E5"
                                        width="10rem"
                                        height="3rem"
                                        borderRadius="10px" />

                                ))
                            }
                        </div>
                    </div>
                    <div className="top_result">
                        <h4>Top results</h4>

                        <div className="buttons">

                            {
                                buttons.map(e => (

                                    <Button innerText={e.name}
                                        margin="0.3rem"
                                        color={e.color}
                                        backGroundColor={e.backgroundColor}
                                        width="12rem"
                                        icon={e.type === "reset" ? null : dropDownIcon}
                                        height="3rem"
                                        borderRadius="10px" />

                                ))
                            }
                        </div>
                    </div>
                    <div className="results">
                        <Divider width="100%" height="0.2rem" backgroundColor="grey" marginBottom="3rem" marginTop="3rem" />

                        <ProfileCard data={mockUsers} />
                    </div>

                </div>

                <Footer />
            </div>
        );
    }
}

export default CustomerServiceMainPage;
