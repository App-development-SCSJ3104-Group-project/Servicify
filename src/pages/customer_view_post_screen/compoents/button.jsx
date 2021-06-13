import React from "react";

const ProposalCardButton = ({ buttonName, onClick, isOpened }) => {
  const buttonStyles = "proposal__card_button" ;
  return (
    <button
      onClick={onClick}
      className={isOpened ? buttonStyles + "_active" : buttonStyles}
      style={{marginBottom:"1rem",border:"none",fontSize:"1.6rem",fontFamily:"Mulish"}}
    >
      {isOpened ? "hide steps" : buttonName}
    </button>
  );
};

export default ProposalCardButton;
