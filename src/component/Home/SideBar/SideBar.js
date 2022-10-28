import React, { Component } from "react";
import UserList from "./UserList/UserList";
import Tabs from "./Tabs/Tabs";
// import Select from "./../../DB/Select";

import "./SideBar.css";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      tab: "single"
    };
  }
  user = () => {
    this.setState({ tab: "single" });
  };
  group = () => {
    this.setState({ tab: "group" });
  };
  channal = () => {
    this.setState({ tab: "channal" });
  };
  setWho = e => {
    this.props.parent.setWhoId(e.target.id);
    this.props.parent.setChatType(this.state.tab);
  };

  render(props) {
    this.value = this.props.parent.state;
    switch (this.state.tab) {
      case "single":
        this.bar = this.props.parent.state.db.profile.friends;
        this.msg = this.props.parent.state.db.single;
        break;
      case "group":
        this.bar = this.props.parent.state.db.profile.groups;
        this.msg = this.props.parent.state.db.group;
        break;
      case "channal":
        this.bar = this.props.parent.state.db.profile.channal;
        this.msg = this.props.parent.state.db.channal;
        break;
      default:
        this.bar = [];
        this.msg = [];
    }
    return (
      <div className="side-bar">
        <div className="user-list">
          <UserList
            bar={this.bar}
            setWho={this.setWho}
            msg={this.msg}
            type={this.state.tab}
          />
        </div>
        <div className="tabs">
          <Tabs
            user={this.user}
            group={this.group}
            channal={this.channal}
            sliderTab={ value => this.setState({ tab: value })}
            slider={this.state.tab}
          />
        </div>
      </div>
    );
  }
}

export default SideBar;
