const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return action.payload;
    case "CREATE_POST":
      return [...posts, action.payload];
    case "CREATE_PROPOSAL":
      return posts;
    case "Delete_POST":
      return posts.filter((post) => post._id !== action.payload._id);
    default:
      return posts;
  }
};
export default postsReducer;
