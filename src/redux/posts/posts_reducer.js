const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return action.payload;
    case "CREATE_POST":
      return [...posts, action.payload];
    case "CREATE_PROPOSAL":
      return posts;
    case "Delete_POST":
      const postsList = posts.filter(function (post) {
        return post._id !== action.payload;
      });
      return postsList;

    default:
      return posts;
  }
};
export default postsReducer;
