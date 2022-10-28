import React, { Component } from "react";
import "./Header.css";
import Back from "./Back/Back";
import Present from "./Present/Present";
import Icons from "./Icons/Icons";

class Header extends Component {
  constructor(){
    super();
    this.who = '';
  }
  looper(array){
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === this.props.whoId) {
        this.who = array[i]
      }
    }
  }
  render(props) {
    if (this.props.type === "single") {
      this.looper(this.props.db.profile.friends);
      
    } else if (this.props.type === "group") {
      this.looper(this.props.db.profile.groups);
      
    } else if (this.props.type === "channal") {
      this.looper(this.props.db.profile.channal);
    } else {
      this.who = [];
    }
    if (this.props.page === "chat") {
      this.title = (
        <div className="child present">
          <Present type={this.props.type} who={this.who}/>
        </div>
      );
      this.notifIcon = true;
    } else if (this.props.page === "Notifications") {
      this.title = (
        <div className="child present">
          <span className="header-title">{this.props.page}</span>
        </div>
      );
      this.notifIcon = false;
    } else {
      this.title = (
        <div className="child present">
          <span className="header-title">{this.props.page}</span>
        </div>
      );
    }
    return (
      <div className="header">
        <header>
          <div className="child back">
            <Back back={this.props.back} />
          </div>
          {this.title}
          <div className="child icons">
            <Icons
              ham={this.props.ham}
              notif={this.props.notif}
              notifIcon={this.notifIcon}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
