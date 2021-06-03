import React, { Component } from "react"

import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import SearchArea from "../search_area/search_area";

import "./template.scss";

class Template extends Component {

    constructor(props) {
        super(props)
        this.props = props

    }

    style = {
        padding: this.props.padding
    }

    render() {

        return (
            <div className="template" >

                <div className="spec_div" style={{ backgroundColor: "#F2F6F9" }}>
                    <Nav isLogged={true} />
                </div>
                <div className="spec_div" style={{ backgroundColor: "#313641" }} >
                    <SearchArea route={this.props.route} />
                </div>

                <div className="spec_div" style={this.style}>

                    {this.props.children}

                </div>
                <Footer />
            </div>
        )
    }

}

export default Template