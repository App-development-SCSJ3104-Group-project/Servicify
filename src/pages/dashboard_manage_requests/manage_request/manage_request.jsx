import React, { Component } from "react";
import DashboardCard from "../../../components/dashboard_card/dashboard_card";
import Card from "../../../components/card/card";
import IconButton from "../../../components/icon/icon_component";
import star from "../../../icons/outline_star_black_24dp 1.svg";

import "./manage_request.scss";

class ManageRequests extends Component {
  constructor({ props }) {
    super(props);
    this.props = props;
  }

  onClickCard = (event) => {
    const target = event.target.closest(".profile_card").lastChild;
    target.classList.toggle("show_card");
  };

  render() {
    const { requests, acceptRequest, loading } = this.props;
    return (
      <DashboardCard label={"Requests list"}>
        <div className="list_of_cards">
          {loading ? (
            <div className="loading-div">
              <div className="loader">Loading...</div>
            </div>
          ) : typeof requests === "string" ? (
            <h3>{requests}</h3>
          ) : (
            requests.map((prop) => [
              <Card
                imgHeight="15.0rem"
                scaleUp={true}
                imgWidth="15.0rem"
                width="50%"
                image_src={prop.customer.imgSrc}
                imgHsize="8rem"
                imgWsize="8rem"
                data={prop.name}
                callback={this.onClickCard}
              >
                <div className="order_header_card">
                  <div className="order_header_card_left">
                    <div className="part_one">
                      <h3>
                        {prop.customer.firstName + " " + prop.customer.lastName}
                      </h3>
                      <div className="rate_div">
                        <h3>4.5</h3>
                        <img src={star} alt="" />
                      </div>
                    </div>
                    <h3>
                      {prop.time} / {prop.location} / {prop.payment}
                    </h3>
                  </div>
                  <div className="right_float_button">
                    {prop.status === "Pending" ? (
                      [
                        <div
                          onClick={() => {
                            acceptRequest(
                              prop._id,
                              JSON.parse(localStorage.getItem("user"))._id,
                              "Accepted"
                            );
                            setTimeout(() => {
                              window.location.reload();
                            }, 500);
                          }}
                        >
                          <IconButton
                            innerText={"Accept"}
                            heightDiv="4.0rem"
                            widthDiv="15.0rem"
                            borderRadius="5rem"
                            backgroundColor="#1E2833"
                            src={null}
                          />
                        </div>,
                        <div
                          onClick={() => {
                            acceptRequest(
                              prop._id,
                              JSON.parse(localStorage.getItem("user"))._id,
                              "Rejected"
                            );
                            setTimeout(() => {
                              window.location.reload();
                            }, 500);
                          }}
                        >
                          <IconButton
                            innerText={"Reject"}
                            heightDiv="4.0rem"
                            widthDiv="15.0rem"
                            borderRadius="5rem"
                            backgroundColor="#1E2833"
                            src={null}
                          />
                        </div>,
                      ]
                    ) : (
                      <div
                        className="proposal_status"
                        style={{ cursor: `pointer`, width: "15rem" }}
                      >
                        <h4>{prop.status}</h4>
                      </div>
                    )}
                  </div>
                </div>
                <div className="toggle_card">
                  <br />
                  <h3>City: {prop.location} </h3>
                  <h3>Diagnosing fees: {prop.fees}</h3>
                  <h3>Payment: {prop.payment}</h3>
                  <h3>Description:{prop.description}</h3>
                  <h3>Provision date:{prop.provisionDate}</h3>
                  <h3>Time:{prop.time}</h3>
                  <h3>
                    Feedback: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Esse mollitia officiis ipsum. Praesentium,
                    consequuntur. Mollitia aspernatur quibusdam cupiditate
                    laboriosam quis?
                  </h3>
                  <h3>Rate: 3</h3>
                </div>
              </Card>,
              <br />,
            ])
          )}
        </div>
      </DashboardCard>
    );
  }
}
export default ManageRequests;
