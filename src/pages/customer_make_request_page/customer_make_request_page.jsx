import React, { Component } from "react"
import Button from "../../components/button/button"
import Template from "../../components/template/template"
import Zoom from 'react-reveal/Zoom'
import { connect } from "react-redux";
import "./customer_make_request_page.scss"
import cancel from "../../icons/outline_add_white_24dp 1.svg"
import { makeRequest } from "../../redux/requests/requests_action"
import { Link } from "react-router-dom";

class CustomerMakeRequestScreen extends Component {


    constructor(props) {
        super(props)
        this.state = {
            location: "",
            payment: "",
            fees: "",
            description: ""
        }
    }
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("user"))
    }
    onClick = () => {
        if (this.state.location ==== "" ||
            this.state.payment ==== "" ||
            this.state.fees ==== "" ||
            this.state.description ==== "")
            return alert("field are required")

        const { makeRequest } = this.props

        const data = JSON.parse(localStorage.getItem("user"))

        makeRequest({
            location: this.state.location, payment: this.state.payment, fees: this.state.fees,
            description: this.state.description, customerId: data._id, serviceProviderId: new URLSearchParams(this.props.location.search).get("id")
        })

        setTimeout(() => {
            this.props.history.push('/customer_manage_requests');
        }, 500);


    }

    onChange(type, value) {
        this.state[type] = value
        this.setState({})
    }
    render() {

        const { loading } = this.props
        return (
            loading ? (
                <div className="loading-div">
                    <div className="loader">Loading...</div>
                </div>
            ) :
                <Template>

                    <div className="request_content">

                        <Zoom>
                            <div className="request_body">
                                <h3>Send a request</h3>
                                <div className="input_fields">
                                    <div className="flex-div">

                                        <input onChange={event => this.onChange('location', event.target.value)} className="input" type="text" placeholder="Location" />
                                        <input onChange={event => this.onChange('payment', event.target.value)} className="input" type="text" placeholder="payment" />
                                        <input onChange={event => this.onChange('fees', event.target.value)} className="input" type="number" placeholder="Total Fees" />

                                    </div>
                                    {/* <Button innerText={"Upload file"}
                                    margin="0.3rem"
                                    color={"white"}
                                    backGroundColor={"#1E2833"}
                                    width="12rem"
                                    height="4rem"
                                    borderRadius="2rem" /> */}
                                </div>

                                <textarea onChange={event => this.onChange('description', event.target.value)} name="Text1" cols="40" rows="5" placeholder="Problem description" className="input description_input"></textarea>
                                <Zoom left >

                                    <div className="input_fields">
                                        <input className="input" type="number" placeholder={"To: " + new URLSearchParams(this.props.location.search).get("name")} readOnly />

                                        <div className="flex-div">

                                            <Link to="/customer_service_main_page">
                                                <Button innerText={null}
                                                    margin="0.3rem"
                                                    color="black"
                                                    iconPosition='false'
                                                    backGroundColor="#1E2833"
                                                    width="4rem"
                                                    height="4rem"
                                                    icon={cancel}
                                                    borderRadius="50%"
                                                    iconHeight="3rem"
                                                    iconWidth="3rem"
                                                />
                                            </Link>
                                            <div onClick={() => this.onClick()}>
                                                <Button innerText={"Send request"}
                                                    margin="0.3rem"
                                                    color={"white"}
                                                    backGroundColor={"#1E2833"}
                                                    width="12rem"
                                                    height="4rem"
                                                    borderRadius="2rem" />
                                            </div>
                                        </div>

                                    </div>
                                </Zoom>


                            </div>
                        </Zoom>

                    </div>
                </Template>
        )
    }
}


const mapStateToProps = ({ usersReducer, requestsReducer }) => ({
    loading: requestsReducer.loading
});

const mapDispatchToProps = (dispatch) => {
    return {
        makeRequest: (data) => {
            dispatch(makeRequest(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerMakeRequestScreen);

