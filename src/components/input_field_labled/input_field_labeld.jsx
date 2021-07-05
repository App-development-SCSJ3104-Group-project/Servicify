import React, { Component } from "react"
import "./input_field_labeled.scss"

class LabeledInputField extends Component {

    render() {

        return (
            <div>
                <h2>{this.props.label}</h2>
                <br />
                {
                    this.props.tag === "textarea" ?
                        <textarea className={this.props.className}
                            name={this.props.name}  
                            // @ts-ignore
                            type={this.props.type}
                            value={this.props.value}
                            onChange={(event) => this.props.handleInputChange(event)} />
                        :
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