import React from "react";
import "./Icons.css";
import Notif from "./Notif/Notif";
import HamBar from "./HamBar/HamBar";

class Icons extends React.Component {
  render(props) {
    if (this.props.notifIcon === true) {
      this.notif = (
          <Notif notif={this.props.notif} />
      );
    } else {
      this.notif = "";
    }
    return (
      <div className="icons">
        <div className="con">
          <div className="notif">{this.notif}</div>
          <div className="ham-bar" onClick={this.props.ham}>
            <HamBar onclick="hamClick" />
          </div>
        </div>
      </div>
    );
  }

  
}
export default Icons;

