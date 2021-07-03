import React, { Component } from "react";
import Button from "../../components/button/button"
import Icon from "../../components/icon/icon_component"
import Review from "../../components/reviews/review"
import Card from "../../components/card/card"
import Template from "../../components/template/template"
import "./customer_profile.scss"
import image from "../../icons/Ellipse.svg";
import favourite from "../../icons/icons8-heart-30 (1) 1.svg";
import order from "../../icons/outline_book_white_24dp 1.svg";
import icon_1 from "../../icons/outline_location_on_white_48dp 1.svg";
import cashIcon from "../../icons/cash.svg";
import paymentIcon from "../../icons/payment-method.svg";
import icon_4 from "../../icons/outline_star_white_48dp 1.svg";
import profileIcon from "../../icons/Ellipse (3).svg";
import Star from "../../icons/star.svg"
import Zoom from 'react-reveal/Zoom'
import LabeledInputField from "../../components/input_field_labled/input_field_labeld"
import { connect } from "react-redux";
import { getUser } from "../../redux/users/users_action";
import { Link } from "react-router-dom";

class CustomerProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city: null,
            rate: null,
            isCashPaymentActive: null,
            diagnosingFees: null,
            jobDescription: null,
            firstName: null,
            lastName: null,
            gender: null,
            imgSrc: null,
            email: null,
            country: null,
            phoneNumber: null,
            postalCode: null,
            password: null,
            repeatedPassword: null,
            displayLanguage: null,
            jobName: null,
            jobDescription: null,
            isCashPaymentActive: null,
            diagnosingFees: null,
            rate: null,
            city: null,
        }
    }

    getRate(rate) {
        let block = [];
        for (let index = 0; index < rate; index++) {
            block.push(<Icon height="2rem" width="2rem" src={Star} />)
        }
        return block;
    }
    componentWillMount() {

        const { getUser } = this.props

        getUser(this.props.match.params.id)


    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { loading, user } = this.props

        return (
            loading ?
                <div className="loading-div">
                    < div className="loader" > Loading...</div >
                </div >
                :
                user !== null ?
                    <Template route={"profile"} padding="0rem">
                        <div className="main_content">

                            <div className="profile_header">

                                <Zoom>
                                    <div className="profile_image">
                                        <img src={image} alt="" />
                                        <h3>{user.firstName + " " + user.lastName}</h3>
                                    </div>
                                </Zoom>

                            </div>

                            <div className="profile_body">

                                <Zoom right cascade>
                                    <form action="">
                                        <div className="top_content">
                                            <div className="header_style">
                                                <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_1} backgroundColor="#57C4E5" />
                                                <LabeledInputField tag="input" className="input_style" name="city" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                                    value={this.state.city === null ? user.city : this.state.city} />
                                            </div>
                                            <div className="header_style">
                                                <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_4} backgroundColor="#57C4E5" />
                                                <LabeledInputField tag="input" className="input_style" name="rate" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                                    value={this.state.rate === null ? user.rate : this.state.rate} />
                                            </div>
                                            <div className="header_style">
                                                <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={paymentIcon} backgroundColor="#57C4E5" />
                                                <LabeledInputField tag="input" className="input_style" name="diagnosingFees" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                                    value={this.state.diagnosingFees === null ? user.diagnosingFees : this.state.diagnosingFees} />
                                            </div>
                                            <div className="header_style">
                                                <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={cashIcon} backgroundColor="#57C4E5" />
                                                <LabeledInputField tag="input" className="input_style" name="isCashPaymentActive" type="checkbox" handleInputChange={this.handleInputChange.bind(this)}
                                                    value={this.state.isCashPaymentActive === null ? user.isCashPaymentActive : this.state.isCashPaymentActive} />
                                            </div>
                                        </div>
                                    </form>
                                </Zoom>

                                <div className="info_card" style={{ marginTop: "5rem", textAlign: "start", padding: "1rem" }}>
                                    <h2>Information</h2>
                                    <LabeledInputField tag="textarea" className="input_style" name="jobDescription" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                        value={this.state.jobDescription === null ? user.jobDescription : this.state.jobDescription} />
                                </div>
                                <div className="info_card" style={{ marginTop: "5rem", textAlign: "start", padding: "1rem" }}>
                                    <h2>Job Description</h2>
                                    <LabeledInputField tag="textarea" className="input_style" name="jobDescription" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                        value={this.state.jobDescription === null ? user.jobDescription : this.state.jobDescription} />
                                </div>

                                <div className="profile_body_content_2">
                                    <div className="info_card">
                                        <h2>First Name</h2>
                                        <LabeledInputField tag="input" className="input_style" name="firstName" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.firstName === null ? user.firstName : this.state.firstName} />
                                    </div>

                                    <div className="info_card">
                                        <h2>Last Name</h2>
                                        <LabeledInputField tag="input" className="input_style" name="lastName" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.lastName === null ? user.lastName : this.state.lastName} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Gender</h2>
                                        <LabeledInputField tag="input" className="input_style" name="gender" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.gender === null ? user.gender : this.state.gender} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Image Source</h2>
                                        <LabeledInputField tag="input" className="input_style" name="imgSrc" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.imgSrc === null ? user.imgSrc : this.state.imgSrc} />
                                    </div>
                                </div>
                                <div className="profile_body_content_2">
                                    <div className="info_card">
                                        <h2>Email</h2>
                                        <LabeledInputField tag="input" className="input_style" name="email" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.email === null ? user.email : this.state.email} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Country</h2>
                                        <LabeledInputField tag="input" className="input_style" name="country" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.country === null ? user.country : this.state.country} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Phone Number</h2>
                                        <LabeledInputField tag="input" className="input_style" name="phoneNumber" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.phoneNumber === null ? user.phoneNumber : this.state.phoneNumber} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Postal Code</h2>
                                        <LabeledInputField tag="input" className="input_style" name="postalCode" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.postalCode === null ? user.postalCode : this.state.postalCode} />
                                    </div>
                                </div>
                                <div className="profile_body_content_2">
                                    <div className="info_card">
                                        <h2>Password</h2>
                                        <LabeledInputField tag="input" className="input_style" name="password" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.password === null ? user.password : this.state.password} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Repeated Password</h2>
                                        <LabeledInputField tag="input" className="input_style" name="repeatedPassword" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.repeatedPassword === null ? user.password : this.state.repeatedPassword} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Display Language</h2>
                                        <LabeledInputField tag="input" className="input_style" name="displayLanguage" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.displayLanguage === null ? user.displayLanguage : this.state.displayLanguage} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Job Title</h2>
                                        <LabeledInputField tag="input" className="input_style" name="jobName" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.jobName === null ? user.jobName : this.state.jobName} />
                                    </div>
                                </div>

                                <Review />
                                {/* <div className="feedback_card">

                                <Zoom>
 
                                    {this.mockUsers.map(e => (


                                        <Card image_src={profileIcon}>
                                            <div className="header">
                                                <div className="card_header">
                                                    <h5>{e.name}</h5>
                                                    <h5>{e.date}</h5>
                                                </div>
                                            </div>

                                            <div className="card_body">

                                                <div className="feedback">{e.feedback}</div>

                                                <br />
                                                <div className="card_feedback_rate">
                                                    {this.getRate(e.rate)}
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </Zoom>

                            </div> */}

                            </div>
                        </div>
                    </Template>
                    : <div className="loading-div">
                        < div className="loader" > Loading...</div >
                    </div >
        )
    }
}

const mapStateToProps = ({ usersReducer }) => ({
    user: usersReducer.user,
    loading: usersReducer.loading
});

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => {
            dispatch(getUser(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile)