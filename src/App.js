import "./App.css";
import SignupForm from "../src/pages/Signup/signup.jsx";
import LoginForm from "../src/pages/Login/login";
import CustomerOrderScreen from "../src/pages/customer_order/CustomerOrdersScreen.jsx";
import { Route } from "react-router-dom";
import CustomerMain from "./pages/customer_main_screen/customer_main_screen";
import CustomerServiceMainPage from "./pages/customer_service_main_page/customer_service_main_page";
import CustomerServiceProviderPage from "./pages/customer_service_provider_page/customer_service_provider_page";
import CustomerPostScreen from "./pages/customer_post_screen/customer_post_screen";
import CustomerSavedScreen from "./pages/customer_saved_screen/customer_saved_screen";
import CustomerMakeRequestPage from "./pages/customer_make_request_page/customer_make_request_page";
import DashboardOverviewPage from "./pages/dashboard_overview_page/dashboard_overview_page";
import DashboardManageOrders from "./pages/dashboard_manage_orders/dashboard_manage_orders";
import DashboardManageRequests from "./pages/dashboard_manage_requests/dashboard_manage_requests";
import LandingPage from "./pages/landing_page/landing_page";
import CustomerViewPost from "./pages/customer_view_post_screen/customer_view_post_screen";

function App() {
  return (
    <div className="App">
      <Route exact path="/signup" component={SignupForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/customer_main_screen" component={CustomerMain}></Route>
      <Route
        path="/customer_service_main_page"
        component={CustomerServiceMainPage}
      ></Route>
      <Route
        path="/customer_service_provider_page"
        component={CustomerServiceProviderPage}
      ></Route>
      <Route
        path="/customer_saved_page"
        component={CustomerSavedScreen}
      ></Route>
      <Route
        path="/customer_request_page"
        component={CustomerMakeRequestPage}
      ></Route>
      <Route
        path="/customer_orders_screen"
        component={CustomerOrderScreen}
      ></Route>
      <Route
        path="/customer_post_screen"
        component={CustomerPostScreen}
      ></Route>

      <Route
        path="/customer_view_post_screen"
        component={CustomerViewPost}
      ></Route>

      <Route path="/dashboard" component={DashboardOverviewPage}></Route>
      <Route
        path="/dashboard_manage_orders"
        component={DashboardManageOrders}
      ></Route>
      <Route
        path="/dashboard_manage_requests"
        component={DashboardManageRequests}
      ></Route>
    </div>
  );
}

export default App;
