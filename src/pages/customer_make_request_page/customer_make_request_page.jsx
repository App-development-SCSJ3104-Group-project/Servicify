import React, { Component } from "react"
import Button from "../../components/button/button"
import Template from "../../components/template/template"
import Zoom from 'react-reveal/Zoom'
import { connect } from "react-redux";
import "./customer_make_request_page.scss"
import cancel from "../../icons/outline_add_white_24dp 1.svg"
import { makeRequest } from "../../redux/requests/requests_action"


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
    onClick = () => {

        const { makeRequest } = this.props

        const response = makeRequest({
            location: this.state.location, payment: this.state.payment, fees: this.state.fees,
            description: this.state.description, customerId: this.props.userId, serviceProviderId: new URLSearchParams(this.props.location.search).get("id")
        })

        setTimeout(() => {
            if (this.props.loading === false)
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
    userId: usersReducer.userInAuth[0]._id,
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

