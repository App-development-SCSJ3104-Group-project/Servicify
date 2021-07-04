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
import { getUser, updateUser } from "../../redux/users/users_action";
import { Link } from "react-router-dom";
import cancel from "../../icons/outline_add_white_24dp 1.svg"

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
            class: "input_style",
            classH: "header_style",
            isEdit: false
        }
    }

    edit() {
        this.setState({ class: "input_style_edit", classH: "header_style_edit", isEdit: true })
    }
    reset() {
        this.setState({
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
            class: "input_style",
            classH: "header_style",
            isEdit: false
        })
    }

    submit() {
        const { updateUser, user } = this.props

        user.city = this.state.city !== null ? this.state.city : user.city
        user.rate = this.state.rate !== null ? this.state.rate : user.rate
        user.isCashPaymentActive = this.state.isCashPaymentActive !== null ? this.state.isCashPaymentActive : user.isCashPaymentActive
        user.diagnosingFees = this.state.diagnosingFees !== null ? this.state.diagnosingFees : user.diagnosingFees
        user.jobDescription = this.state.jobDescription !== null ? this.state.jobDescription : user.jobDescription
        user.firstName = this.state.firstName !== null ? this.state.firstName : user.firstName
        user.lastName = this.state.lastName !== null ? this.state.lastName : user.lastName
        user.gender = this.state.gender !== null ? this.state.gender : user.gender
        user.imgSrc = this.state.imgSrc !== null ? this.state.imgSrc : user.imgSrc
        user.email = this.state.email !== null ? this.state.email : user.email
        user.country = this.state.country !== null ? this.state.country : user.country
        user.phoneNumber = this.state.phoneNumber !== null ? this.state.phoneNumber : user.phoneNumber
        user.postalCode = this.state.postalCode !== null ? this.state.postalCode : user.postalCode
        user.password = this.state.password !== null ? this.state.password : user.password
        user.repeatedPassword = this.state.repeatedPassword !== null ? this.state.repeatedPassword : user.repeatedPassword
        user.displayLanguage = this.state.displayLanguage !== null ? this.state.displayLanguage : user.displayLanguage
        user.jobName = this.state.jobName !== null ? this.state.jobName : user.jobName
        user.jobDescription = this.state.jobDescription !== null ? this.state.jobDescription : user.jobDescription
        user.isCashPaymentActive = this.state.isCashPaymentActive !== null ? this.state.isCashPaymentActive : user.isCashPaymentActive
        user.diagnosingFees = this.state.diagnosingFees !== null ? this.state.diagnosingFees : user.diagnosingFees
        user.rate = this.state.rate !== null ? this.state.rate : user.rate

        updateUser(user)
        this.reset()
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
                                <div className="profile_buttons">
                                    {
                                        this.state.isEdit ?
                                            [
                                                <Button innerText={null}
                                                    margin="0.3rem"
                                                    color="black"
                                                    iconPosition='false'
                                                    backGroundColor="#1E2833"
                                                    width="4rem"
                                                    height="4rem"
                                                    onClick={() => this.reset()}
                                                    icon={cancel}
                                                    borderRadius="50%" />,
                                                <Button innerText={"Update"}
                                                    margin="0.3rem"
                                                    color="white"
                                                    iconPosition='false'
                                                    backGroundColor="#1E2833"
                                                    width="10rem"
                                                    height="4rem"
                                                    borderRadius="20px"
                                                    onClick={() => this.submit()}
                                                />
                                            ] :
                                            <Button innerText={null}
                                                margin="0.3rem"
                                                color="black"
                                                iconPosition='false'
                                                backGroundColor="#1E2833"
                                                width="4rem"
                                                height="4rem"
                                                onClick={() => this.edit()}
                                                icon={favourite}
                                                borderRadius="50%" />
                                    }
                                </div>
                                <Zoom>
                                    <div className="profile_image">
                                        <img src={user.imgSrc} alt="" style={{ borderRadius: "50%", }} />
                                        <h3>{user.firstName + " " + user.lastName}</h3>
                                    </div>
                                </Zoom>

                            </div>

                            <div className="profile_body">

                                <Zoom right cascade>
                                    <form action="">
                                        <div className="top_content">
                                            <div className={this.state.classH}>
                                                <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_1} backgroundColor="#57C4E5" />
                                                <LabeledInputField tag="input" className={this.state.class} name="city" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                                    value={this.state.city === null ? user.city : this.state.city} />
                                            </div>
                                            {
                                                user.isServiceProvider ?
                                                    [<div className={this.state.classH}>
                                                        <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_4} backgroundColor="#57C4E5" />
                                                        <h3>{user.rate}</h3>
                                                    </div>,
                                                    <div className={this.state.classH}>
                                                        <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={paymentIcon} backgroundColor="#57C4E5" />
                                                        <LabeledInputField tag="input" className={this.state.class} name="diagnosingFees" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                                            value={this.state.diagnosingFees === null ? user.diagnosingFees : this.state.diagnosingFees} />
                                                    </div>] : null
                                            }
                                            <div className={this.state.classH}>
                                                <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={cashIcon} backgroundColor="#57C4E5" />
                                                {/* <LabeledInputField tag="input" className={this.state.class} name="isCashPaymentActive" type="checkbox" handleInputChange={this.handleInputChange.bind(this)}
                                                    value={this.state.isCashPaymentActive === null ? user.isCashPaymentActive : this.state.isCashPaymentActive} /> */}
                                                <br />
                                                <br />
                                                <h3>{user.isCashPaymentActive ? "Cash" : "Credit card"}</h3>
                                            </div>
                                        </div>
                                    </form>
                                </Zoom>

                                {
                                    user.isServiceProvider ?
                                        <div className="info_card" style={{ marginTop: "5rem", textAlign: "start", padding: "1rem" }}>
                                            <h2>Job Description</h2>
                                            <LabeledInputField tag="textarea" className={this.state.class} name="jobDescription" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                                value={this.state.jobDescription === null ? user.jobDescription : this.state.jobDescription} />
                                        </div> : null
                                }
                                <div className="profile_body_content_2">
                                    <div className="info_card">
                                        <h2>First Name</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="firstName" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.firstName === null ? user.firstName : this.state.firstName} />
                                    </div>

                                    <div className="info_card">
                                        <h2>Last Name</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="lastName" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.lastName === null ? user.lastName : this.state.lastName} />
                                    </div>
                                </div>
                                <div className="profile_body_content_2">
                                    <div className="info_card">
                                        <h2>Gender</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="gender" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.gender === null ? user.gender : this.state.gender} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Image Source</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="imgSrc" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.imgSrc === null ? user.imgSrc : this.state.imgSrc} />
                                    </div>
                                </div>
                                <div className="profile_body_content_2">
                                    <div className="info_card">
                                        <h2>Email</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="email" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.email === null ? user.email : this.state.email} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Phone Number</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="phoneNumber" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.phoneNumber === null ? user.phoneNumber : this.state.phoneNumber} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Country</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="country" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.country === null ? user.country : this.state.country} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Postal Code</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="postalCode" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.postalCode === null ? user.postalCode : this.state.postalCode} />
                                    </div>
                                </div>
                                <div className="profile_body_content_2">
                                    <div className="info_card">
                                        <h2>Password</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="password" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.password === null ? user.password : this.state.password} />
                                    </div>
                                    <div className="info_card">
                                        <h2>Repeated Password</h2>
                                        <LabeledInputField tag="input" className={this.state.class} name="repeatedPassword" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                            value={this.state.repeatedPassword === null ? user.password : this.state.repeatedPassword} />
                                    </div>
                                </div>
                                <div className="info_card">
                                    <h2>Display Language</h2>
                                    <LabeledInputField tag="input" className={this.state.class} name="displayLanguage" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                        value={this.state.displayLanguage === null ? user.displayLanguage : this.state.displayLanguage} />
                                </div>
                                {
                                    user.isServiceProvider ?
                                        <div className="info_card">
                                            <h2>Job Title</h2>
                                            <LabeledInputField tag="input" className={this.state.class} name="jobName" type="text" handleInputChange={this.handleInputChange.bind(this)}
                                                value={this.state.jobName === null ? user.jobName : this.state.jobName} />
                                        </div> : null
                                }
                            </div>
                        </div>

                        {user.isServiceProvider ?
                            <Review /> : null
                        }


                    </Template >
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
        getUser: (id) => { dispatch(getUser(id)); },
        updateUser: (user) => { dispatch(updateUser(user)); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile)