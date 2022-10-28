import React from "react";
import "./Options.css";

class Options extends React.Component {
  render(props) {
    return (
      <div className="options-o">
        <div className="box">
          <div className="title">Create</div>
          <div className="item" onClick={this.props.option} id="Group">
            <span className="fa fa-plus" id="Group" />
            <span className="text" id="Group">
              Group
            </span>
          </div>
          <div className="item" onClick={this.props.option} id="Channal">
            <span className="fa fa-plus" id="Channal" />
            <span className="text" id="Channal">
              Channal
            </span>
          </div>
        </div>
        <div className="box">
          <div className="title">Tools</div>
          <div className="item" onClick={this.props.option} id="Profile">
            <span className="fa fa-user" id="Profile" />
            <span className="text" id="Profile">
              Profile
            </span>
          </div>
          <div className="item" onClick={this.props.option} id="Friends">
            <span className="fa fa-users" id="Friends" />
            <span className="text" id="Friends">
              Friends
            </span>
          </div>
          <div className="item" onClick={this.props.option} id="tTeme">
            <span className="fa fa-paint-brush" id="Theme" />
            <span className="text" id="Theme">
              Theme
            </span>
          </div>
          <div className="item" onClick={this.props.option} id="Settings">
            <span className="fa fa-gear" id="Settings" />
            <span className="text" id="Settings">
              Settings
            </span>
          </div>
        </div>
        <div className="box">
          <div className="title">Account</div>
          <div className="item" onClick={this.props.option} id="Logout">
            <span className="fa fa-share" id="Logout" />
            <span className="text" id="Logout">
              Logout
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Options;
