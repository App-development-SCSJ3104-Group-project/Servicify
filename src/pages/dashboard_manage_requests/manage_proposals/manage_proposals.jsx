import React, { Component } from "react";
import DashboardCard from "../../../components/dashboard_card/dashboard_card";
import Card from "../../../components/card/card";
import IconButton from "../../../components/icon/icon_component";
import profileIcon from "../../../icons/Ellipse (3).svg";
import star from "../../../icons/outline_star_black_24dp 1.svg";

import "./manage_proposals.scss";
import moment from "moment";
import { Link } from "react-router-dom";

class ManageProposals extends Component {
  constructor({ props }) {
    super(props);
    this.props = props;
  }

  onClickCard = (event) => {
    const target = event.target.closest(".profile_card").lastChild;
    target.classList.toggle("show_card");
  };

  statusButton = (status, id, serviceProviderId, cancelProposal) => {
    if (status === "Accepted") {
      return (
        <React.Fragment>
          <Link to={"/dashboard_manage_orders"}>
            <IconButton
              innerText={"check orders"}
              heightDiv="4.0rem"
              widthDiv="18.0rem"
              borderRadius="5rem"
              backgroundColor="#7fe1e3"
              src={null}
            />
          </Link>
          <div
            className="proposal_status"
            style={{
              cursor: `pointer`,
              width: "18.0rem",
            }}
          >
            <h4>Accepted</h4>
          </div>
        </React.Fragment>
      );
    } else if (status === "Pending") {
      return (
        <React.Fragment>
          <div onClick={() => cancelProposal(id, serviceProviderId)}>
            <IconButton
              innerText={"Cancel"}
              heightDiv="4.0rem"
              widthDiv="18.0rem"
              borderRadius="5rem"
              backgroundColor="#1E2833"
              src={null}
            />
          </div>
          <div
            className="proposal_status"
            style={{
              cursor: `pointer`,
              width: "18.0rem",
            }}
          >
            <h4>Pending</h4>
          </div>
        </React.Fragment>
      );
    } else if (status === "rejected") {
      return (
        <React.Fragment>
          <IconButton
            innerText={"Rejected"}
            heightDiv="4.0rem"
            widthDiv="18.0rem"
            borderRadius="5rem"
            backgroundColor="#e32e12"
            src={null}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <IconButton
            innerText={"canceled"}
            heightDiv="4.0rem"
            widthDiv="18.0rem"
            borderRadius="5rem"
            backgroundColor="#e32e12"
            src={null}
          />
        </React.Fragment>
      );
    }
  };

  render() {
    const { cancelProposal } = this.props;
    return (
      <DashboardCard label={"Proposals"}>
        <div className="list_of_cards">
          {this.props.proposals.message === "No proposal was found" ? (
            <h3>No proposal found</h3>
          ) : (
            this.props.proposals.map((prop) => [
              <Card
                key={prop._id}
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
                        {prop.customer.firstName +
                          "  " +
                          prop.customer.lastName}
                      </h3>
                      <div className="rate_div"></div>
                    </div>
                    <h3>
                      {moment(prop.timestamp).fromNow()} / {prop.post.location}{" "}
                      / {prop.post.paymentMethod}
                    </h3>
                  </div>
                  <div className="right_float_button">
                    {this.statusButton(
                      prop.status,
                      prop._id,
                      prop.serviceProviderId,
                      cancelProposal
                    )}
                  </div>
                </div>
                <div className="toggle_card">
                  <h3>{moment(prop.timestamp).fromNow()} </h3>
                  <h3>
                    City: {"   " + prop.post.location} / Day:
                    {"  " + moment(prop.timestamp).format("dddd")} / Date:
                    {"   " + prop.provisionDate}
                  </h3>
                  <h3>Diagnosing fees: {prop.diagnosisFee}</h3>
                  <h3>Payment: {prop.post.paymentMethod}</h3>
                  <h3>{prop.post.description}</h3>
                  <h3>Rate: {Math.floor(Math.random() * 5)}</h3>
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
export default ManageProposals;

// <IconButton
//   innerText={"Cancel"}
//   heightDiv="4.0rem"
//   widthDiv="15.0rem"
//   borderRadius="5rem"
//   backgroundColor="#1E2833"
//   src={null}
// />
