import  React from "react";
import Navbar from "../../components/navbar/navbar";
import SearchArea from "../../components/search_area/search_area.jsx"
import Footer from "../../components/footer/footer";
import "./CustomerOrdersScreen.scss"
import CustomButton from "../../components/button/button"
import  Order from "../../components/order/order"
import UserImg from "./1-intro-photo-final 1 (1).png";
class CustomerOrdersScreen extends React.Component{


    constructor(props){


        super(props);
        this.state={
        
           activeTab:null,
            innerTabs:[
            {
                type:"button",
                innerText:"Status",
                color:"white", 
                displayType:"block",
                width:"100%",
                margin:"2.5rem 0",
                boxShadow:"none",
                isActive:false

            },
             {
                type:"button",
                innerText:"OrdersList",
                color:"white", 
                displayType:"block",
                width:"100%",
                margin:"2.5rem -1.5rem",
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                isActive:true
            }
        ],
        searchBarTabs:[
      { name: "overview", isActive: false },
      { name: "services", isActive: false },
      { name: "posts", isActive: false },
      { name: "orders", isActive: true},
      { name: "favorites", isActive: false },
      { name: "requests", isActive: false },
      { name: "profile", isActive: false, lastTab: true },
    ],

    OrdersList:[
        {

            userImg:UserImg
        },
        {

            userImg:UserImg
        },
        {

            userImg:UserImg
        }
    ]

        }

        
    }
    handleTabChanges=(buttonInnerText,tabsType)=>{

       const newInnerTabs=this.state.innerTabs;
       let activeTab=buttonInnerText;
       newInnerTabs.forEach((innerTab)=>{

        innerTab.innerText==buttonInnerText?innerTab.isActive=true:innerTab.isActive=false;
       })
        this.setState({

            innerTabs:newInnerTabs,
            activeTab:activeTab
        })
    }
    render(){
    
      
    const {innerTabs,searchBarTabs,activeTab,OrdersList}=this.state;
    const {handleTabChanges}=this;
        return(

            <div className="customer-order">
                    <Navbar></Navbar>
                    <SearchArea tabs={searchBarTabs}></SearchArea>
                    <div className="order-list-section">
  <div className="orders-list-inner-section">
      <div className="orders-list-inner-section__content-container">
                     
<div className="orders-list-inner-section__content-container__tabs">

           
            {innerTabs.map((formButton, index) => {
              // @ts-ignore
              return <CustomButton   {...formButton} backGroundColor={formButton.isActive?"#57C4E5":"#212738"} onClick={()=>handleTabChanges(formButton.innerText,"innerTabs")}></CustomButton>;
            })}

          

</div>
<div className="orders-list-inner-section__content-container__orders">


            {activeTab=="OrdersList"?OrdersList.map((order)=>{

                return <Order {...order}></Order>
            }):null}

</div>
  
      </div>
                    </div>
                    </div>
                  
                     <Footer></Footer>
            </div>
        )
    }

}

export default CustomerOrdersScreen;