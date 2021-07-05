import React from "react";
import Avatar from "../../../../components/search_result/inner_components/avatar";
import ProposalCardButton from "../button";
import ProposalSteps from "../proposalSteps/proposalStep";
import Zoom from "react-reveal/Zoom";
import { useDispatch } from "react-redux";
import { acceptAProposal } from "../../../../redux/proposals/proposals_action";
import { rejectAProposal } from "./../../../../redux/proposals/proposals_action";
import { Link } from "react-router-dom";

const ProposalCard = ({
  serviceProvider,
  steps,
  description,
  diagnosisFee,
  provisionDate,
  useState,
  _id,
  status,
}) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const acceptProposal = () => {
    dispatch(acceptAProposal(_id));
  };

  const rejectProposal = () => {
    dispatch(rejectAProposal(_id));
  };

  const pressedActions = () => {
    if (status === "Pending") {
      return (
        <React.Fragment>
          <button
            onClick={acceptProposal}
            className={"proposal__card_button"}
            style={{
              marginBottom: "1rem",
              border: "none",
              fontSize: "1.6rem",
              fontFamily: "Mulish",
            }}
          >
            Accept
          </button>
          <button
            onClick={rejectProposal}
            className={"proposal__card_button"}
            style={{
              marginBottom: "1rem",
              border: "none",
              fontSize: "1.6rem",
              fontFamily: "Mulish",
            }}
          >
            Reject
          </button>
        </React.Fragment>
      );
    } else if (status === "rejected") {
      return (
        <button
          className={"proposal__card_button"}
          style={{
            marginBottom: "1rem",
            border: "none",
            fontSize: "1.6rem",
            fontFamily: "Mulish",
            backgroundColor: "#f44336",
          }}
        >
          Rejected
        </button>
      );
    } else if (status === "Accepted") {
      return (
        <Link to={"/customer_orders_screen"}>
          <button
            className={"proposal__card_button"}
            style={{
              marginBottom: "1rem",
              border: "none",
              fontSize: "1.6rem",
              fontFamily: "Mulish",
              backgroundColor: "#3f51b5",
            }}
          >
            check orders
          </button>
        </Link>
      );
    } else if (status === "canceled") {
      return (
        <button
          className={"proposal__card_button"}
          style={{
            marginBottom: "1rem",
            border: "none",
            fontSize: "1.6rem",
            fontFamily: "Mulish",
            backgroundColor: "#3f51b5",
          }}
        >
          Canceled
        </button>
      );
    }
  };

  return (
    <Zoom>
      <div className="proposal__card__information_1">
        <div className="proposal__header_background_box"></div>
        <div className="proposal__header_area">
          <div className="proposal__avatar_profileinfo">
            <Avatar
              source={serviceProvider.imgSrc}
              width={"100px"}
              height={"100px"}
            />
            <div className="proposal__profile_info">
              <p>
                {serviceProvider.firstName + " " + serviceProvider.lastName}
              </p>
              <p>{provisionDate}</p>
            </div>
          </div>
          <div className="proposal__controlled_buttons">
            {pressedActions()}
            <ProposalCardButton
              buttonName={"Show steps"}
              onClick={() => setOpen(!open)}
              isOpened={open}
            />
          </div>
        </div>
        <div className="proposal__body_content">
          <p>
            <b>Fees: {diagnosisFee + " " + "RM"}</b>
          </p>
          <p>
            <b>Description: {description} </b>
          </p>
          <p>{}</p>
          {open ? <ProposalSteps steps={steps} /> : ""}
        </div>
      </div>
    </Zoom>
  );
};

export default ProposalCard;
