import serviceProvidersReducer from "./service_providers/service_providers_reducer";
import categoriesReducer from "./categories/categories_reducer";
import notificationsReducer from "./notifications/notifications_reducer";
import ordersReducer from "./orders/orders_reducer";
import postsReducer from "./posts/posts_reducer";
import proposalsReducer from "./proposals/proposals_reducer";
import requestsReducer from "./requests/requests_reducer";
import savedReducer from "./saved/saved_reducer";
import searchReducer from "./search/search_reducer";
import usersReducer from "./users/users_reducer";

import { combineReducers } from "redux";

export default combineReducers({
  serviceProvidersReducer: serviceProvidersReducer,
  categoriesReducer: categoriesReducer,
  notificationsReducer: notificationsReducer,
  ordersReducer: ordersReducer,
  posts: postsReducer,
  proposals: proposalsReducer,
  requestsReducer: requestsReducer,
  savedReducer: savedReducer,
  searchReducer: searchReducer,
  usersReducer: usersReducer,
});
