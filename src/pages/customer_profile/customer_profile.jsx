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
import { connect } from "react-redux";
import { getUser } from "../../redux/users/users_action";
import { Link } from "react-router-dom";

class CustomerProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {

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

        console.log(this.props.match.params.id);
        getUser(this.props.match.params.id)
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
                                    <div className="top_content">
                                        <div className="">
                                            <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_1} backgroundColor="#57C4E5" />
                                            <br />
                                            <h3>{user.city}</h3>
                                        </div>
                                        <div className="">
                                            <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_4} backgroundColor="#57C4E5" />
                                            <br />
                                            <h3>{user.rate}</h3>
                                        </div>
                                        <div className="">
                                            <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={paymentIcon} backgroundColor="#57C4E5" />
                                            <br />
                                            <h3>{user.diagnosingFees}</h3>
                                        </div>
                                        <div className="">
                                            <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={cashIcon} backgroundColor="#57C4E5" />
                                            <br />
                                            <h3>Cash</h3>
                                        </div>
                                    </div>
                                </Zoom>

                                <div className="profile_body_content">
                                    <h2>Information</h2>
                                    <br />
                                    <h5>{user.jobDescription}</h5>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile);

