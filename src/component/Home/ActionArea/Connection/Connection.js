import React, { Component } from "react";
import "./Connection.css";

class Connection extends Component {
  constructor() {
    super();
    this.state = {
      shade:false
    }
  }

  componentDidMount() {
    document.getElementById("button").addEventListener("click", () => {
      this.setState({ shade: !this.state.shade });
    });
  }

  render() {
    if (this.state.shade === true) {
      this.shade = "open";
    } else {
      this.shade = "close";
    }
    return (
      <div className="connection">
        <div className="con">
          <div className="eye">
            <span className="fa fa-eye" />
          </div>
          <div className="status">
            <span>Connected</span>
          </div>
          <div className="options">
            <div className="button" id="button">
              <div className="one dot" />
              <div className="two dot" />
              <div className="three dot" />
            </div>
            <div className="option-details" id={this.shade}>
              <div>Search</div>
              <div>Go To First</div>
              <div>Profile</div>
              <div>Delete Chat</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Connection;
