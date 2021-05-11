import React from 'react';
import Navbar from "../../components/navbar/navbar";
import "./mainpage.scss";
class MainPage extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

        }
    }
    render() {

        return (

            <div className="main-page">

                <Navbar></Navbar>
                
            </div>
        )
    }
}

export default MainPage;