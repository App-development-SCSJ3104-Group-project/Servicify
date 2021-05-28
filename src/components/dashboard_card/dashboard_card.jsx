import CircularAvatar from "../icon/icon_component"

import "./dashboard_card.scss"

const dashboardCard = (props) => {


    return (

        <div className="dashboard_card">

            <div className="card_label">
                <CircularAvatar height={"1.6rem"} width={"1.6rem"} innerText={props.label} src={null} heightDiv={"5rem"} widthDiv={"15rem"} backgroundColor={"#303036"} borderRadius={"1rem"} />

            </div>
            {props.children}
        </div>
    );
}

export default dashboardCard