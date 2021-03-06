import React, { Component } from "react"
import "./input_field_labeled.scss"

class LabeledInputField extends Component {

    render() {

        return (
            <div>
                <h2>{this.props.label}</h2>
                <br />
                {

                    <input className={this.props.className}
                        name={this.props.name}
                        type={this.props.type}
                        value={this.props.value}
                        onChange={(event) => this.props.handleInputChange(event)} />
                }
            </div >
        )
    }
}


export default LabeledInputField