import "./App.css";
import SignupForm from "../src/pages/Signup/signup.jsx";
import LoginForm from "../src/pages/Login/login";
// import LandingPage from "../src/pages/landing_page/landing_page";
import CustomerOrderScreen from "../src/pages/customer_order/CustomerOrdersScreen.jsx";

import { Route } from "react-router-dom";
import CustomerMain from "./pages/customer_main_screen/customer_main_screen";
import CustomerServiceMainPage from "./pages/customer_service_main_page/customer_service_main_page";
import CustomerServiceProviderPage from "./pages/customer_service_provider_page/customer_service_provider_page";
<<<<<<< HEAD
import CustomerMakeRequestPage from "./pages/customer_make_request_page/customer_make_request_page";
import CustomerMakeRequestScreen from "./pages/customer_make_request_page/customer_make_request_page";
import CustomerPostScreen from "./pages/customer_post_screen/customer_post_screen";
=======
import CustomerSavedScreen from "./pages/customer_saved_screen/customer_saved_screen";
import CustomerMakeRequestPage from "./pages/customer_make_request_page/customer_make_request_page";
import CustomerMakeRequestScreen from "./pages/customer_make_request_page/customer_make_request_page";
import DashboardOverviewPage from "./pages/dashboard_overview_page/dashboard_overview_page";
import LandingPage from "./pages/landing_page/landing_page";


>>>>>>> b04c63d81809a51a9f9a56a3c7baef385fced0e2
function App() {
  return (
    <div className="App">
      <Route exact path="/signup" component={SignupForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/customer_main_screen" component={CustomerMain}></Route>
<<<<<<< HEAD
      <Route
        path="/customer_orders_screen"
        component={CustomerOrderScreen}
      ></Route>
      <Route
        path="/customer_orders_screen"
        component={CustomerOrderScreen}
      ></Route>
      <Route
        path="/customer_post_screen"
        component={CustomerPostScreen}
      ></Route>
=======
      <Route path="/customer_orders_screen" component={CustomerOrderScreen}></Route>
>>>>>>> b04c63d81809a51a9f9a56a3c7baef385fced0e2
    </div>
  );
}

export default App;
