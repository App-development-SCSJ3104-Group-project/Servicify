import  React from "react";
import Navbar from "../../components/navbar/navbar";
import SearchArea from "../../components/search_area/search_area.jsx"
import Footer from "../../components/footer/footer";
import "./CustomerOrdersScreen.scss"
class CustomerOrdersScreen extends React.Component{


    constructor(props){


        super(props);
        this.state={

        }
    }

    render(){

        return(

            <div className="customer-order">
                    <Navbar></Navbar>
                    <SearchArea></SearchArea>
                    <div className="order-list-section">
  <div className="orders-list-inner-section">
                        x
                    </div>
                    </div>
                  
                     <Footer></Footer>
            </div>
        )
    }

}

export default CustomerOrdersScreen;