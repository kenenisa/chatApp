import React from "react";

//style
import "./Login.css";

class Login extends React.Component {
  render(props) {
    if (this.props.field === "email") {
      this.email = "focus";
    } else {
      this.email = "";
    }
    if (this.props.field === "password") {
      this.password = "focus";
    } else {
      this.password = "";
    }
    return (
      <div className="login">
        <div className="form">
          <form action="" method="post">
            <div className="heading">
              <div className="title">Login</div>
              <div className="link">Get account</div>
            </div>
            <div className="inputs">
              <div className={`item ${this.email}`}>
                <label htmlFor="email">Email</label>
                <span className="fa fa-envelope" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onFocus={this.props.focus}
                  required
                />
              </div>
              <div className={`item ${this.password}`}>
                <label htmlFor="password">Password</label>
                <span className="fa fa-lock" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onFocus={this.props.focus}
                  required
                />
              </div>
              <div className="item button">
                <div className="forgot">Forgot your password?</div>
                <button id="submit">
                  Sign in
                  <span className="fa fa-sign-in" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
