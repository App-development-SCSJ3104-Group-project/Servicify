import React, { Component } from "react"
import Button from "../../components/button/button"
import Template from "../../components/template/template"

import "./customer_make_request_page.scss"
import cancel from "../../icons/outline_add_white_24dp 1.svg"
class CustomerMakeRequestScreen extends Component {




    render() {

        return (
            <Template>
                <div className="request_content">

                    {/* <div className="request_header">

                    </div> */}
                    <div className="request_body">
                        <h3>Send a request</h3>
                        <div className="input_fields">
                            <div className="flex-div">

                                <input className="input" type="text" placeholder="Location" />
                                <input className="input" type="number" placeholder="payment" />
                                <input className="input" type="number" placeholder="Total Fees" />

                            </div>
                            <Button innerText={"Upload file"}
                                margin="0.3rem"
                                color={"white"}
                                backGroundColor={"#1E2833"}
                                width="12rem"
                                height="4rem"
                                borderRadius="2rem" />
                        </div>

                        <textarea name="Text1" cols="40" rows="5" placeholder="Problem description" className="input description_input"></textarea>

                        <div className="input_fields">
                            <input className="input" type="number" placeholder="To: John Smith" readOnly />
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


                </div>
            </Template> 
        )
    }
}


export default CustomerMakeRequestScreen;