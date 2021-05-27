import React from "react";
import Nav from "../../components/navbar/navbar";
import SearchArea from "../../components/search_area/search_area.jsx";
import Footer from "../../components/footer/footer";
import "./CustomerOrdersScreen.scss";
import CustomButton from "../../components/button/button";
import Order from "../../components/order/order";
import UserImg from "./1-intro-photo-final 1 (1).png";
import StatusDone from "./svg/image 2.png"


import OrderStatus from "../../components/status/orderStatus";
class CustomerOrdersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "",
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
          userImg: UserImg,

        },
        {
          userImg: UserImg,

        },
        {
          userImg: UserImg,

        },
      ],
    };
  }
  handleTabChanges = (buttonInnerText, tabsType) => {
    const newInnerTabs = this.state.innerTabs;
    let activeTab = buttonInnerText;
    newInnerTabs.forEach((innerTab) => {
      innerTab.innerText == buttonInnerText
        ? (innerTab.isActive = true)
        : (innerTab.isActive = false);
    });
    this.setState({
      innerTabs: newInnerTabs,
      activeTab: activeTab,
    });
  };
  checkTab=()=>{

    const currentOrder=this.state.OrdersList[0];
    if(this.state.activeTab!="OrdersList"){

      return (

        <div className="orders-list-inner-section__content-container__status__inner">

          <img src={StatusDone} alt="" className="orders-list-inner-section__content-container__status__img"/>
          <Order {...currentOrder}></Order>
        </div>
      )
    }
  }
  render() {
    const { innerTabs, activeTab, OrdersList } = this.state;
    const { handleTabChanges } = this;
    return (
      <div className="customer-order">
        <Nav isLogged={true} />
        <SearchArea route={"orders"}></SearchArea>
        <div className="order-list-section">
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
              <div className="orders-list-inner-section__content-container__orders">
                {activeTab == "OrdersList"
                  ? OrdersList.map((order) => {
                    return <Order {...order}></Order>;
                  })
                  : null}
              </div>
              <div className="orders-list-inner-section__content-container__status">
                {
                
                 this.checkTab()
                }
                    

              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default CustomerOrdersScreen;
