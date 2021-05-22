import React, { Component } from "react";
import Nav from "../../components/navbar/navbar";
import SearchArea from "../../components/search_area/search_area";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import Divider from "../../components/divider/divider";
import Icon from "../../components/icon_component/icon";
import ProfileCard from "../../components/profile_card/profile_card";
import dropDownIcon from "./outline_arrow_back_ios_white_24dp 1.svg";
import notification from "./outline_notification_important_black_48dp 1.svg";

import "../landing_page/landing_page.scss";
import "./customer_service_main_page.scss";
class CustomerServiceMainPage extends Component {
  render() {

    const buttons = [
      {
        name: "Fees",
        isActive: false,
        type: "fees",
        backgroundColor: "#1E2833",
        color: "white",
      },
      {
        name: "Rate",
        isActive: false,
        type: "rate",
        backgroundColor: "#1E2833",
        color: "white",
      },
      {
        name: "Location",
        isActive: false,
        type: "location",
        backgroundColor: "#1E2833",
        color: "white",
      },
      {
        name: "Payment",
        isActive: false,
        type: "payment",
        backgroundColor: "#1E2833",
        color: "white",
      },
      {
        name: "Reset",
        isActive: false,
        type: "reset",
        backgroundColor: "#FF835C",
        color: "white",
      },
    ];
    const categories = [
      "Tech",
      "Tech",
      "Tech",
      "Tech",
      "Tech",
      "Tech",
      "Tech",
      "Tech",
      "Tech",
      "Tech",
    ];
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
    const currentIndex = 2;
    return (
      <div className="landing-page">
        <Nav isLogged={true} />
        <SearchArea route={"services"} />

        <div className="card_view">
          <div className="categories">
            <h4>Categories</h4>
            <div className="items">
              {categories.map((e) => (
                // @ts-ignore
                <Button
                  innerText={"#" + e}
                  margin="0.3rem"
                  iconPosition="true"
                  color="black"
                  backGroundColor="#57C4E5"
                  width="10rem"
                  height="3rem"
                  borderRadius="10px"
                />
              ))}
            </div>
          </div>
          <div className="top_result">
            <h4>Top results</h4>

            <div className="buttons">
              {buttons.map((e) => (
                // @ts-ignore
                <Button
                  innerText={e.name}
                  margin="0.3rem"
                  color={e.color}
                  backGroundColor={e.backgroundColor}
                  width="12rem"
                  icon={e.type === "reset" ? null : dropDownIcon}
                  height="3rem"
                  borderRadius="10px"
                />
              ))}
            </div>
          </div>
          <div className="results">
            <Divider
              width="100%"
              height="0.2rem"
              backgroundColor="grey"
              marginBottom="3rem"
              marginTop="3rem"
            />

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
      </div>
    );
  }
}

export default CustomerServiceMainPage;
