import React, { Component } from "react";
import "./MiniProfile.css";
import ProfileImg from "./../../../../logo.svg";
class MiniProfile extends Component {
  render() {
    return (
      <div className="mini">
        <div className="edit">
          <span className="fa fa-pencil" />
        </div>
        <div className="img-box">
          <img src={ProfileImg} alt="Profile" />
        </div>
        <div className="content">
          <div className="name">Kenenisa</div>
          <div className="email">kenenisaalemayhu0@gmail.com</div>
        </div>
      </div>
    );
  }
}

export default MiniProfile;
