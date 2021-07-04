const proposalsReducer = (proposals = [], action) => {
  switch (action.type) {
    case "FETCH_PROPOSALS":
      return action.payload;
    case "ACCEPT_PROPOSAL":
      return proposals.map((proposal) =>
        proposal._id === action.payload._id ? action.payload : proposal
      );
    case "REJECT_PROPOSAL":
      return proposals.map((proposal) =>
        proposal._id === action.payload._id ? action.payload : proposal
      );
    default:
      return proposals;
  }
};

export default proposalsReducer;
