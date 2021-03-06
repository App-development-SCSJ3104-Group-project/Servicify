import React from "react";

const ProposalSteps = ({ steps }) => {
  if (steps.length === 0) {
    return <h3>steps is not available from the service provider</h3>;
  }

  return (
    <div className="proposal__description_steps">
      {steps?.map((value, index) => (
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

export default ProposalSteps;
