import React from "react";
import "./CustomerOrdersScreen.scss";
import CustomButton from "../../components/button/button";
import Order from "../../components/order/order";
import UserImg from "../../icons/User1.svg";
import UserImg2 from "../../icons/User2.svg";
import UserImg3 from "../../icons/User3.svg";
import Diagnosing from "../../icons/prescription.svg"
import PopUp from "./InnerComponents/PopUp/PopUp"
import { loadData } from "../../redux/orders/orders_action"
import Template from "../../components/template/template"
import { giveFeedback } from "../../redux/orders/orders_action"
import { connect } from "react-redux";


class CustomerOrdersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "OrdersList",
      popUpToggle: false,
      popUpType: "feedback",
      innerTabs: [
        {
          type: "button",
          innerText: "Status",
          color: "white",
          displayType: "block",
          width: "100%",
          margin: "2.5rem 0",
          boxShadow: "none",
          isActive: false,
        },
        {
          type: "button",
          innerText: "OrdersList",
          color: "white",
          displayType: "block",
          width: "100%",
          margin: "2.5rem -1.5rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          isActive: true,
        },
      ],



      OrdersList: [
        {
          name: "Marwan Mostafa",
          rating: 4.2,
          orderedSince: "27 minutes",
          city: "Istanbul",
          day: "monday",
          date: "15/05/2021",
          diagonsingFees: 10.00,
          totalFees: 30.00,
          paymentType: "cash",
          feedback: "dummy text of the priting and typesetting industry",
          userImg: UserImg,
          ongoing: false,
          giveFeedBackOnClick: this.openPopUp,
          cancelOnClick: this.openPopUp,
        },
        {
          name: "Jalal ajlan",
          rating: 4.8,
          orderedSince: "1 hour",
          city: "Johor",
          day: "Friday",
          date: "18/02/2021",
          diagonsingFees: 14.00,
          totalFees: 42.00,
          paymentType: "cash",
          feedback: "dummy text of the priting and typesetting industry",
          userImg: UserImg2,
          ongoing: false,
          giveFeedBackOnClick: this.openPopUp,
          cancelOnClick: this.openPopUp,

        },
        {
          name: "Ahmed el raqab",
          rating: 4.6,
          orderedSince: "2 hours",
          city: "Mecca",
          day: "Sunday",
          date: "11/02/2021",
          diagonsingFees: 24.00,
          totalFees: 52.00,
          paymentType: "cash",
          feedback: "dummy text of the priting and typesetting industry",
          userImg: UserImg3,
          ongoing: true,
          giveFeedBackOnClick: this.openPopUp,
          cancelOnClick: this.openPopUp,

        },
      ],
    };
  }

  handleTabChanges = (buttonInnerText, tabsType) => {
    const newInnerTabs = this.state.innerTabs;
    let activeTab = buttonInnerText;
    newInnerTabs.forEach((innerTab) => {
      innerTab.innerText === buttonInnerText
        ? (innerTab.isActive = true)
        : (innerTab.isActive = false);
    });
    this.setState({
      innerTabs: newInnerTabs,
      activeTab: activeTab,
    });
  };

  handlePopUpInput = (childData) => {
  }
  closePopUp = (popUpType) => {
    this.setState({
      popUpToggle: false,
      popUpType: popUpType
    })
  }
  openPopUp = (popUpType) => {
    this.setState({
      popUpToggle: true,
      popUpType: popUpType
    })

  }

  checkTab = () => {

    //returning the first order within the ongoing orders
    const { ordersList } = this.props
    const currentOrder = typeof ordersList !== "string" ? ordersList.filter((order) => order.ongoing === true)[0] : null

    //deciding on tabs content, if orders list , orderslist will get populated
    if (this.state.activeTab != "OrdersList") {

      if (currentOrder === null || currentOrder === undefined || currentOrder === []) {

        return <div className="orders-list-inner-section__content-container__status__inner  animate__animated animate__zoomInDown">

          <img src={Diagnosing} alt="" className="orders-list-inner-section__content-container__status__img " />

          <div className="orders-list-inner-section__content-container__status__inner__diagnosis-info ">
            <div>No ongoing Orders</div>
            <div></div>
          </div>
        </div>

      } else {
        return (

          <div className="orders-list-inner-section__content-container__status__inner  animate__animated animate__zoomInDown">

            <img src={Diagnosing} alt="" className="orders-list-inner-section__content-container__status__img " />

            <div className="orders-list-inner-section__content-container__status__inner__diagnosis-info ">
              <div>Diagnosing the problem</div>
              <div>#0156FD55DFF55</div>
            </div>
            <Order {...currentOrder} orderType="order-status"></Order>
          </div>
        )

      }

    }
  }
  componentWillMount() {
    const { loadData } = this.props;
    const data = JSON.parse(localStorage.getItem("user"))

    loadData(data._id)

  }
  render() {


    const { innerTabs, activeTab } = this.state;
    const { handleTabChanges } = this;



    return (
      <Template route="orders">

        <div className="customer-order">
          <div className="order-list-section">

            {this.state.popUpToggle === true ? <PopUp popUpType={this.state.popUpType} closeCallBack={this.closePopUp} submitCallBack={this.handlePopUpInput} Header={this.state.popUpType === "feedback" ? "Description" : "Reason"}></PopUp> : null}

            <div className="orders-list-inner-section">
              <div className="orders-list-inner-section__content-container">
                <div className="orders-list-inner-section__content-container__tabs">
                  {innerTabs.map((formButton, index) => {
                    // @ts-ignore
                    return (
                      <CustomButton
                        // @ts-ignore
                        CustomButton
                        {...formButton}
                        backGroundColor={
                          formButton.isActive ? "#57C4E5" : "#212738"
                        }
                        onClick={() =>
                          handleTabChanges(formButton.innerText, "innerTabs")
                        }
                      ></CustomButton>
                    );
                  })}
                </div>
                <div className="orders-list-inner-section__content-container__orders ">
                  {

                    this.state.activeTab === "OrdersList" ?

                      <div className="orders-list-inner-section__content-container__orders__animation-container animate__animated animate__zoomIn">
                        {
                          typeof this.props.ordersList !== "string" ? this.props.ordersList.map((order, index) => {
                            return <Order {...order} order={order} id={index} className="" giveFeedBackOnClick={this.openPopUp} cancelOnClick={this.openPopUp}></Order>
                          }) : <div className="orders-list-inner-section__content-container__orders__no-orders">{this.props.ordersList}</div>
                        }
                      </div>
                      : null
                  }
                </div>
                <div className="orders-list-inner-section__content-container__status ">
                  {

                    this.checkTab()
                  }


                </div>
              </div>
            </div>
          </div>

        </div>
      </Template>

    );
  }
}


const mapStateToProps = ({ ordersReducer, usersReducer }) => {
  return {
    ordersList: ordersReducer.ordersList,
    userInAuth: usersReducer.userInAuth
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    // import action from //???? action file
    loadData: (userInAuth) => { dispatch(loadData(userInAuth)) },
    giveFeedback: (id, description, rate) => { dispatch(giveFeedback(id, description, rate)) }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersScreen)