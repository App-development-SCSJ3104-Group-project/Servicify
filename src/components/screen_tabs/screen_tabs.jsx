import React from "react"
import "./screen_tabs.scss"

class ScreenTabs extends React.Component {

    tabs = [
        { name: "status", status: true },
        { name: "Orderslist", status: false },
    ]

    onclickFun = (event) => {

        console.log(event.target.classList)
        if (event.target.classList[0] === "unActive" && event.target.classList[1] === "status") {
            this.tabs[0].status = true
            this.tabs[1].status = false
        } else if (event.target.classList[0] === "unActive" && event.target.classList[1] === "Orderslist") {
            this.tabs[0].status = false
            this.tabs[1].status = true

        }
        this.setState({})
    }

    render() {

        return (
            <div className="tabs_parent_style" >
                {
                    this.tabs.map(e => (

                        <div className={e.status == true ? "active " + e.name : "unActive " + e.name} onClick={this.onclickFun}>
                            <h3>{e.name}</h3>
                        </div>

                    ))
                }

            </div >
        )
    }


}
export default ScreenTabs