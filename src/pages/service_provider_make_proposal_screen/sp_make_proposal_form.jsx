import React, { useState } from "react";
import Nav from "./../../components/navbar/navbar";
import "./service_provider_make_proposal.css";
import PostCard from "./../../components/post_card/post_card";
// import { useForm, useFieldArray } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

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

  // submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
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
          className="proposal__form_body_section-input_field-1"
          placeholder="Cost of diagnosis"
          name="fee"
          autoComplete="off"
        />
        <br />
        <div className="select">
          <select
            className="proposal__form_body_section-input_field-copied"
            name="payment"
          >
            <option value="payment" selected disabled>
              Payment method
            </option>
            <option value="Cash">Cash</option>
            <option value="onlineBanking">Online banking</option>
            <option value="FBX">FBX service</option>
            <option value="creditCard">credit card</option>
          </select>
        </div>
        <textarea
          className="description_form"
          placeholder="Describe your proposal here"
          name="description"
          wrap="off"
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
              placeholder={`Enter Step ${index + 1} Description`}
              autoComplete="off"
            />
            {inputFields.length === 1 ? (
              ""
            ) : (
              <div className="proposal-form-steps-action">
                <p onClick={() => handleRemoveFields(inputField.id)}>-</p>
              </div>
            )}
            <div className="proposal-form-steps-action">
              <p onClick={handleAddFields}>+</p>
            </div>
          </div>
        ))}
        <br />
      </div>
      <ProposalFormPostArea post={props.post} />
      <div className="proposal__footArea_submit_section">
        <input
          className="proposal__footArea_submit_section-button"
          type="submit"
          value="Back"
        />
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
