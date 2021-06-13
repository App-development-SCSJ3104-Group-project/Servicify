import React, { Component } from "react";
import Button from "../../components/button/button"
import Icon from "../../components/icon/icon_component"
import Review from "../../components/reviews/review"
import Card from "../../components/card/card"
import Template from "../../components/template/template"

import "./customer_service_provider_page.scss"
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
import LightSpeed from 'react-reveal/LightSpeed'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'


class CustomerServiceProviderPage extends Component {

    mockUsers = [
        {
            name: "John Smith",
            image: profileIcon,
            date: "Friday, 12/05/2020, 9 a.m",
            rate: 3.5,
            feedback: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?"
        },
        {
            name: "John Smith",
            image: profileIcon,
            date: "Friday, 12/05/2020, 9 a.m",
            rate: 3,
            feedback: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?"
        },
        {
            name: "John Smith",
            image: profileIcon,
            date: "Friday, 12/05/2020, 9 a.m",
            rate: 2,
            feedback: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?"
        },
        {
            name: "John Smith",
            image: profileIcon,
            date: "Friday, 12/05/2020, 9 a.m",
            rate: 5,
            feedback: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?"
        },
        {
            name: "John Smith",
            image: profileIcon,
            date: "Friday, 12/05/2020, 9 a.m",
            rate: 1,
            feedback: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis molestias nesciunt aliquam repellat, eligendi vero magnam doloribus tenetur incidunt consequuntur dolorum? Maxime molestiae ex eos et est, necessitatibus pariatur sed dolorem perferendis corrupti a magni numquam officia nam architecto?"
        },
    ]

    getRate(rate) {
        let block = [];
        for (let index = 0; index < rate; index++) {
            block.push(<Icon height="2rem" width="2rem" src={Star} />)
        }
        return block;
    }
    render() {


        return (

            <Template route={"profile"} padding="0rem">
                <div className="main_content">

                    <div className="profile_header">
                        <div className="profile_buttons">
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

                        <Zoom>
                            <div className="profile_image">
                            <img src={image} alt="" />
                            <h3>John Smith</h3>
                        </div>
                        </Zoom>

                    </div>

                    <div className="profile_body">

                        <Zoom right cascade>
                            <div className="top_content">
                            <div className="">
                                <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_1} backgroundColor="#57C4E5" />
                                <br />
                                <h3>Johor Bahru</h3>
                            </div>
                            <div className="">
                                <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={icon_4} backgroundColor="#57C4E5" />
                                <br />
                                <h3>4.5</h3>
                            </div>
                            <div className="">
                                <Icon height="5rem" width="5rem" heightDiv="12rem" widthDiv="12rem" borderRadius="50%" src={paymentIcon} backgroundColor="#57C4E5" />
                                <br />
                                <h3>10.00</h3>
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
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad vero sequi impedit dolor. Excepturi, alias modi totam esse aut fuga repudiandae non officia libero. Dicta ullam beatae deleniti. Impedit, sequi repellendus magni ullam nam rem soluta dignissimos officia, nisi saepe similique! Perspiciatis provident illum necessitatibus non! Excepturi, reprehenderit ipsum. Praesentium quas provident culpa numquam, minus quia at dignissimos explicabo possimus, soluta optio accusamus omnis. Esse, recusandae nihil explicabo modi repellat voluptatibus illum suscipit consequuntur minus obcaecati ducimus necessitatibus deleniti doloribus quisquam porro id, dolor temporibus expedita nostrum! Nostrum, vel! Totam saepe rerum sit nihil aspernatur aliquam laborum maiores corporis!</h5>
                        </div>

                        <Review />
                        <div className="feedback_card">

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

                        </div>

                    </div>
                </div>
            </Template>

        )

    }
}

export default CustomerServiceProviderPage;

// const mapStateToProps = (state) => {
//     return {
//       name: state.main.posts
//     }
//   }
  
//   const mapDispatchToProps = (dispatch) => {
  
//     return {
//       // import action from //???? action file
//       // addPost: (id) => { dispatch(addPost(id)) }
  
//     }
//   }
//   export default connect(mapStateToProps)(CustomerMain)