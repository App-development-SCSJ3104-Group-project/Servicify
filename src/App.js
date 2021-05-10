import logo from './logo.svg';
import './App.css';
import SignupForm from "../src/pages/Signup/signup.jsx";
import LoginForm from "../src/pages/Login/login";


import {Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignupForm}></Route>
      <Route  path="/login" component={LoginForm}></Route>
    </div>
  );
}

export default App;
