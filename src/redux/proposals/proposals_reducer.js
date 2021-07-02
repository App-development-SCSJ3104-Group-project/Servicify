const proposalsReducer = (proposals = [], action) => {
  switch (action.type) {
    case "FETCH_PROPOSALS":
      return action.payload;
    default:
      return proposals;
  }
};

export default proposalsReducer;
