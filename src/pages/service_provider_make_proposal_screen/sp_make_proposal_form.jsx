import React, { useState } from "react";
import Nav from "./../../components/navbar/navbar";
import "./service_provider_make_proposal.css";
import PostCard from "./../../components/post_card/post_card";
import ProposalCardButton from "./../customer_view_post_screen/compoents/button";

const ProposalForm = () => {
  return (
    <React.Fragment>
      <Nav isLogged={true} />

      <div className="posts-wrappper-background">
        <ProposalFormHeader></ProposalFormHeader>
        <ManageProposalForm></ManageProposalForm>
        <ProposalFormPostArea />
        <div className="footer__area__proposal_form">
          <div className="cancel__proposal_form">X</div>
          <ProposalCardButton
            onClick={false}
            isOpened={false}
            buttonName="Submit"
          />
        </div>
        <span></span>
      </div>
    </React.Fragment>
  );
};

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

const ProposalFormHeader = () => {
  return (
    <div className="proposal__form_header_section">
      <header className="proposal__form_header_section-title">
        Fill out all required fields for custom Proposal
      </header>
    </div>
  );
};

const ManageProposalForm = () => {
  const [fee, setFess] = useState("");
  const [payment, setPayment] = useState("");
  const [description, setDescription] = useState("");
  const [stepsNo, setStepsNO] = useState();
  const [stepsInputFieldsNo, setStepsInputFieldsNo] = useState([]);

  const handleChangeInput = (indexNo, event) => {
    const newSteps = stepsInputFieldsNo.map((i, index) => {
      if (indexNo === index) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setStepsInputFieldsNo(newSteps);
  };

  const handleStepsNumber = (event) => {
    setStepsNO(event.target.value);

    if (stepsNo === "0") {
      setStepsInputFieldsNo([]);
    }
    if (stepsNo === "1") {
      setStepsInputFieldsNo([{ stepDescription: "" }]);
    }

    if (stepsNo === "2") {
      setStepsInputFieldsNo([{ stepDescription: "" }, { stepDescription: "" }]);
    }

    if (stepsNo === "3") {
      setStepsInputFieldsNo([
        { stepDescription: "" },
        { stepDescription: "" },
        { stepDescription: "" },
      ]);
    }

    if (stepsNo === "4") {
      setStepsInputFieldsNo([
        { stepDescription: "" },
        { stepDescription: "" },
        { stepDescription: "" },
        { stepDescription: "" },
      ]);
    }
  };

  return (
    <form>
      <div className="proposal__form_body_section">
        <input
          type="text"
          name="fee"
          className="proposal__form_body_section-input_field-1"
          onChange={(event) => setFess(event.target.value)}
          placeholder="Fees"
        />
        <br />
        <div className="select">
          <select
            className="proposal__form_body_section-input_field-1"
            value="payment"
            onChange={(event) => setPayment(event.target.value)}
          >
            <option value="payment">payment</option>
            <option value="Cash">Cash</option>
            <option value="onlineBanking">Online banking</option>
            <option value="FBX">FBX service</option>
            <option value="creditCard">credit card</option>
          </select>
        </div>
        <br />
        <textarea
          className="proposal__form_body_section-input_field-2"
          name="proposalDescription"
          onChange={(event) => setDescription(event.target.value)}
          cols="40"
          rows="10"
          placeholder="Describe your proposal here"
        ></textarea>
        <br />
        <div className="select">
          <select
            className="proposal__form_body_section-input_field-5"
            value="Steps"
            onChange={(event) => handleStepsNumber(event)}
          >
            <option value="steps">Steps</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <br />
        {stepsInputFieldsNo.map((i, index) => (
          <div key={index}>
            <input
              className="proposal__form_body_section-input_field-4"
              name="stepDescription"
              placeholder={`Describe your step ${index + 1} here`}
              type="text"
              onChange={(event) => handleChangeInput(index, event)}
            />
          </div>
        ))}
      </div>
    </form>
  );
};

const ProposalFormPostArea = () => {
  return (
    <React.Fragment>
      <div className="proposal__form_post_Area">
        <header className="proposal__form_post_Area-title">Serverd Post</header>
      </div>
      <PostCard post={post} />
    </React.Fragment>
  );
};

export default ProposalForm;
