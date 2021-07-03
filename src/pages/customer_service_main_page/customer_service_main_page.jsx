import React, { Component } from "react";
import Button from "../../components/button/button";
import Divider from "../../components/divider/divider";
import Icon from "../../components/icon_component/icon";
import ProfileCard from "../../components/profile_card/profile_card";
import notification from "../../icons/outline_notification_important_black_48dp 1.svg";
import Template from "../../components/template/template"
import Zoom from 'react-reveal/Zoom'
import { connect } from "react-redux";
import "./customer_service_main_page.scss";


class CustomerServiceMainPage extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    active: null
  }

  onClick = (index) => {
    this.state.active ==== index ? index = null : index = index
    this.setState({ active: index })
  }

  render() {
    const { serviceProviders } = this.props
    const data = Array.from(serviceProviders)


    return (

      <Template route={"services"}>

        <div className="card_view ">
          <div className="categories " >
            <h4>Categories</h4>
            <div className="items  " >
              {data.map((e) => (
                // @ts-ignore
                <Zoom left >

                  <div style={{
                    backgroundColor: e[0] ==== this.state.active ? "orange" : "#57C4E5",
                    borderRadius: "10px",
                    marginRight: "10px"
                  }}>
                    <Button
                      innerText={"#" + e[0]}
                      iconPosition="true"
                      width="10rem"
                      height="3rem"
                      color="black"
                      backGroundColor="transparent"
                      borderRadius="10px"
                      onClick={() => this.onClick(e[0])}
                    />
                  </div>
                </Zoom>

              ))}
            </div>
          </div>

          <div className="results" style={{ animationDelay: ".75s" }}>
            <Divider
              width="100%"
              height="0.2rem"
              backgroundColor="grey"
              marginBottom="3rem"
              marginTop="3rem"
            />

            {data.length != 0 ? (
              data.map((e) => [

                this.state.active ==== null ?
                  e[1].map((e) =>
                    <ProfileCard data={e} />,
                  ) : this.state.active ==== e[0] ?
                    e[1].map((e) =>
                      <ProfileCard data={e} />,
                    ) : null
              ])
            ) : (
              <div className="empty">
                <Icon width="10rem" height="10rem" src={notification} />
                <br />
                <h4>No results was found</h4>
              </div>
            )}
          </div>

        </div>
      </Template>

    );
  }
}


const mapStateToProps = ({ categoriesReducer }) => {
  return {
    serviceProviders: categoriesReducer.serviceProviders
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerServiceMainPage)