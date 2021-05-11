import logo from "./logo.svg";
import "./App.css";
import SignupForm from "../src/pages/Signup/signup.jsx";
import LoginForm from "../src/pages/Login/login";
import LandingPage from "../src/pages/landing_page/landing_page";
import MainPage from "../src/pages/mainpage/mainpage.jsx";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route exact path="/signup" component={SignupForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/" component={LandingPage}></Route>
      <Route path="/main_page" component={MainPage}></Route>

    </div>
  );
}

export default App;
