import React, { Component } from "react";
import Nav from "../../components/navbar/navbar";
import SearchArea from "../../components/search_area/search_area";
import Footer from "../../components/footer/footer";

import "../landing_page/landing_page.scss";
import "./customer_saved_screen.scss";

class CustomerSavedScreen extends Component {
    render() {

        return (
            <div className="landing-page">

                <Nav isLogged={true} />
                <SearchArea route={"favorites"} />
                <Footer />

            </div>
        )
    }

}


export default CustomerSavedScreen;

