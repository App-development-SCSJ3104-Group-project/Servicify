const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return action.payload;
    case "CREATE_POST":
      return [...posts, action.payload];
    case "CREATE_PROPOSAL":
      return action.payload;
    default:
      return posts;
  }
};
export default postsReducer;
