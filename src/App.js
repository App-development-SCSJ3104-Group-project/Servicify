import logo from "./logo.svg";
import "./App.css";
import SignupForm from "../src/pages/Signup/signup.jsx";
import LoginForm from "../src/pages/Login/login";
import LandingPage from "../src/pages/landing_page/landing_page";

import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignupForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/landing_page" component={LandingPage}></Route>
    </div>
  );
}

export default App;
