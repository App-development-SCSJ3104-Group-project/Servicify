import React, { Component, useState } from "react";
import Nav from "./../../components/navbar/navbar";
import SearchArea from "./../../components/search_area/search_area";
import PostCard from "./../../components/post_card/post_card";
import "./customer_view_post_screen.css";
import Avatar from "./../../components/search_result/avatar";
import ProposalCardButton from "./compoents/button";
import Template from "../../components/template/template"

const post = {
  id: 1,
  postTime: "30 minutes ago",
  postLocation: "Johor Bahru",
  cancelllationFee: "Free cancellation",
  postDesc:
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  tag: ["#Electrical", "#Job", "#Free", "#People"],
  proposals: 6,
};

const proposalsInfo = {
  sericeProviderUsername: "John Smith",
  proposalDay: "Friday",
  proposalDate: "12/05/2020",
  propsalTime: "9 a.m",
  proposalFess: "50.00$",
  proposalDescription:
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  proposedSteps: [
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
    "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  ],
};

class CustomerViewPost extends Component {
  state = {};
  render() {
    return (
      <Template route="posts">
        <React.Fragment>

          <div className="posts-wrappper-background">
            <div className="post-ur-1-3"></div>
            <div className="proposals__ar_annoated">
              <div className="seperate_line__post_of_proposal-section"></div>
              <h3>Proposals</h3>
            </div>
            <ProposalCard {...proposalsInfo} />
            <ProposalCard {...proposalsInfo} />
          </div>
        </React.Fragment>
      </Template>
    );
  }
}

const ProposalCard = ({
  sericeProviderUsername,
  proposalDay,
  proposalDate,
  propsalTime,
  proposalFess,
  proposalDescription,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="proposal__card__information_1">
      <div className="proposal__header_background_box"></div>
      <div className="proposal__header_area">
        <div className="proposal__avatar_profileinfo">
          <Avatar
            source="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
            width={"100px"}
            height={"100px"}
          />
          <div className="proposal__profile_info">
            <p>{sericeProviderUsername}</p>
            <p>
              {proposalDay}, {proposalDate}, {propsalTime}
            </p>
          </div>
        </div>
        <div className="proposal__controlled_buttons">
          <ProposalCardButton
            isOpened={false}
            buttonName={"Accept"}
            onClick={() => setOpen(false)}
          />
          <ProposalCardButton
            isOpened={false}
            buttonName={"Reject"}
            onClick={() => setOpen(false)}
          />
          <ProposalCardButton
            buttonName={"Show steps"}
            onClick={() => setOpen(!open)}
            isOpened={open}
          />
        </div>
      </div>
      <div className="proposal__body_content">
        <p>
          <b>Fees: {proposalFess}</b>
        </p>
        <p>
          <b>Description: </b>
        </p>
        <p>{proposalDescription}</p>
        {open ? <ProposalSteps {...proposalsInfo} /> : ""}
      </div>
    </div>
  );
};

const ProposalSteps = ({ proposedSteps }) => {
  if (proposedSteps.length === 0) {
    return <h3>steps is not available from the service provider</h3>;
  }

  return (
    <div className="proposal__description_steps">
      {proposedSteps.map((value, index) => (
        <div key={index}>
          <p>
            <b>Step: {index + 1}</b>
          </p>
          <p className="proposal__step_paragraph_Style">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerViewPost;
