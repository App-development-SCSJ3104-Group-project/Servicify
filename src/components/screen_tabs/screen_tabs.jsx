import React from "react"
import "./screen_tabs.scss"

class ScreenTabs extends React.Component {


    constructor({ props }) {
        super(props)
        this.props = props
    }

    render() {

        return (
            <div className="tabs_parent_style" >
                {
                    this.props.tabs.map(e => (

                        <div className={e.status == true ? "normal active" : "normal "} onClick={this.props.callback} data-name={e.name}>
                            <h3 className="none">{e.name}</h3>
                        </div>

                    ))
                }

            </div >
        )
    }


}
export default ScreenTabs