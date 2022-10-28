import React from "react";
//style
import "./Auth.css";
//components
import Login from "./Login/Login";
import Signin from "./Signin/Signin";
//tootls
import Particle from "./../Arsenal/Particle";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      form: "login",
      loginField:"",
      Email: "",
      Password: ""
    }
  }
  isFocused = (e) => {
    this.setState({ loginField:e.target.name });
  }

  render() {
    if (this.state.form === "login") {
      this.form = (
        <div>
          <Login focus={this.isFocused} field={this.state.loginField}/>
        </div>
      );
    } else if (this.state.form === "signin") {
      this.form = (
        <div>
          <Signin />
        </div>
      );
    }
    return (
      <div className="auth">
        <div className="background">
          <Particle />
        </div>
        <div className="form-o">{this.form}</div>
      </div>
    );
  }
}

export default Auth;
