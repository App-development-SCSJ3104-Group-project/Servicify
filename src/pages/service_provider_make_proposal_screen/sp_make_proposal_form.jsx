import React, { useState } from "react";
import Nav from "./../../components/navbar/navbar";
import "./service_provider_make_proposal.css";
import PostCard from "./../../components/post_card/post_card";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
//
const ProposalForm = (props) => {
  const postsList = JSON.parse(localStorage.getItem("posts"));
  const post = postsList.find((post) => post._id === props.match.params._id);

  return (
    <React.Fragment>
      <Nav isLogged={true} />
      <div className="posts-wrappper-background">
        <ProposalFormHeader></ProposalFormHeader>
        <ManageProposalForm post={post}></ManageProposalForm>
      </div>
    </React.Fragment>
  );
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

const ManageProposalForm = (props) => {
  //
  // to store all input fields
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), stepDesc: "" },
  ]);
  const [diagnosisFee, setDiagnosisFee] = useState("");
  const [paymentMethod, setPaymentMethod] = useState();
  const [description, setDescription] = useState();
  const [serviceProviderId, setServiceProviderId] = useState("A18CS4042");

  const proposalInfo = {};

  // submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!parseInt(diagnosisFee)) {
      alert("Enter cost of diagnosis");
    } else if (paymentMethod === "" || paymentMethod == "payment") {
      alert("Please select payement method");
    } else if (description === "") {
      alert("please Enter Description");
    } else {
      proposalInfo["serviceProviderId"] = serviceProviderId;
      proposalInfo["diagnosisFee"] = diagnosisFee;
      proposalInfo["paymentMethod"] = paymentMethod;
      proposalInfo["description"] = description;
      proposalInfo["steps"] = inputFields;
      console.log(proposalInfo);
    }
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), stepDesc: "" }]);
  };

  //
  const handleChangeInput = (id, e) => {
    // important
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[e.target.name] = e.target.value;
      }
      return i;
    });

    setInputFields(newInputFields); // array
  };

  //
  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="proposal__form_body_section">
        <input
          type="text"
          name="serviceProviderId"
          value={serviceProviderId}
          hidden
        />
        <input
          type="text"
          className="proposal__form_body_section-input_field-1"
          placeholder="Cost of diagnosis"
          name="fee"
          autoComplete="off"
          onChange={(e) => setDiagnosisFee(e.target.value)}
        />
        <br />
        <div className="select">
          <select
            className="proposal__form_body_section-input_field-copied"
            name="payment"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="payment">Payment method</option>
            <option value="Cash">Cash</option>
            <option value="card">Credit/debit card</option>
          </select>
        </div>
        <textarea
          className="description_form"
          placeholder="Describe your proposal here"
          name="description"
          wrap="off"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* dynmic  */}
        {inputFields?.map((inputField, index) => (
          <div className="proposal-steps-form" key={inputField.id}>
            <input
              type="text"
              name="stepDesc"
              value={inputField.stepDesc}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              className="proposal-form-stepDesc"
              placeholder={`*Optional Enter Step ${index + 1} Description`}
              autoComplete="off"
            />
            {index + 1 === 1 ? (
              ""
            ) : (
              <div className="proposal-form-steps-action">
                <p onClick={() => handleRemoveFields(inputField.id)}>-</p>
              </div>
            )}
            <div className="proposal-form-steps-action">
              <p onClick={index + 1 > 5 ? "" : handleAddFields}>+</p>
            </div>
          </div>
        ))}
        <br />
      </div>
      <ProposalFormPostArea post={props.post} />
      <div className="proposal__footArea_submit_section">
        <Link to="/customer_post_screen">
          <input
            className="proposal__footArea_submit_section-button"
            type="submit"
            value="Back"
          />
        </Link>
        <input
          className="proposal__footArea_submit_section-button"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
};

const ProposalFormPostArea = (props) => {
  return (
    <React.Fragment>
      <div className="proposal__form_post_Area">
        <header className="proposal__form_post_Area-title">Serverd Post</header>
      </div>
      <PostCard post={props.post} />
    </React.Fragment>
  );
};

export default ProposalForm;
