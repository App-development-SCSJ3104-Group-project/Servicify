import React from "react";
import "./CustomerOrdersScreen.scss";
import CustomButton from "../../components/button/button";
import Order from "../../components/order/order";

import Diagnosing from "../../icons/prescription.svg";
import PopUp from "./InnerComponents/PopUp/PopUp";
import { loadData } from "../../redux/orders/orders_action";
import Template from "../../components/template/template";
import { giveFeedback } from "../../redux/orders/orders_action";
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
      orderId: null,
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
    console.log(this.state.orderId);
    console.log(childData.text);
    console.log(childData.rating);

    this.props.giveFeedback(
      this.state.orderId,
      childData.text,
      childData.rating
    );
  };
  closePopUp = (popUpType, orderId) => {
    this.setState({
      popUpToggle: false,
      popUpType: popUpType,
    });
  };
  openPopUp = (popUpType, orderId) => {
    this.setState({
      popUpToggle: true,
      popUpType: popUpType,
      orderId,
    });
  };

  checkTab = () => {
    //returning the first order within the ongoing orders
    const { ordersList } = this.props
    const currentOrder = typeof ordersList !== "string" ? ordersList.filter((order) => order.status !== "Done") : null

    //deciding on tabs content, if orders list , orderslist will get populated
    if (this.state.activeTab != "OrdersList") {
      if (
        currentOrder === null ||
        currentOrder === undefined ||
        currentOrder === []
      ) {
        return (
          <div className="orders-list-inner-section__content-container__status__inner  animate__animated animate__zoomInDown">
            <img
              src={Diagnosing}
              alt=""
              className="orders-list-inner-section__content-container__status__img "
            />

            <div className="orders-list-inner-section__content-container__status__inner__diagnosis-info ">
              <div>No ongoing Orders</div>
              <div></div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="orders-list-inner-section__content-container__status__inner  animate__animated animate__zoomInDown">

            <div className="orders-list-inner-section__content-container__orders__animation-container animate__animated animate__zoomIn">
              {
                typeof currentOrder !== "string" ? currentOrder.map((order, index) => {
                  return <Order {...order} order={order} id={index} className="" giveFeedBackOnClick={this.openPopUp} cancelOnClick={this.openPopUp}></Order>
                }) : <div className="orders-list-inner-section__content-container__orders__no-orders">{currentOrder}</div>
              }
            </div>
          </div>
        );
      }
    }
  };
  componentWillMount() {
    const { loadData } = this.props;
    const data = JSON.parse(localStorage.getItem("user"));

    loadData(data._id);
  }
  render() {
    const { innerTabs } = this.state;
    const { handleTabChanges } = this;

    return (
      <Template route="orders">
        <div className="customer-order">
          <div className="order-list-section">
            {this.state.popUpToggle === true ? (
              <PopUp
                popUpType={this.state.popUpType}
                closeCallBack={this.closePopUp}
                submitCallBack={this.handlePopUpInput}
                Header={
                  this.state.popUpType === "feedback" ? "Description" : "Reason"
                }
              ></PopUp>
            ) : null}

            <div className="orders-list-inner-section">
              <div className="orders-list-inner-section__content-container">
                <div className="orders-list-inner-section__content-container__tabs">
                  {innerTabs.map((formButton) => {
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
                  {this.state.activeTab === "OrdersList" ? (
                    <div className="orders-list-inner-section__content-container__orders__animation-container animate__animated animate__zoomIn">
                      {typeof this.props.ordersList !== "string" ? (
                        this.props.ordersList.map((order, index) => {
                          return order.status.toLowerCase() == "done" ? (
                            <Order
                              {...order}
                              order={order}
                              id={index}
                              className=""
                              giveFeedBackOnClick={this.openPopUp}
                              cancelOnClick={this.openPopUp}
                            ></Order>
                          ):null
                        })
                      ) : (
                        <div className="orders-list-inner-section__content-container__orders__no-orders">
                          {this.props.ordersList}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
                <div className="orders-list-inner-section__content-container__status ">
                  {this.checkTab()}
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
    userInAuth: usersReducer.userInAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // import action from //???? action file
    loadData: (userInAuth) => {
      dispatch(loadData(userInAuth));
    },
    giveFeedback: (id, description, rate) => {
      dispatch(giveFeedback(id, description, rate));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerOrdersScreen);
