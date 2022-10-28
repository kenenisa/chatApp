import React, { Component } from "react";
import "./Action.css";
function AvaterColor() {
  let max = 200;
  let min = 100;
  let red = Math.floor(Math.random() * (max - min + 1) + min);
  let blue = Math.floor(Math.random() * (max - min + 1) + min);
  let green = Math.floor(Math.random() * (max - min + 1) + min);
  return `rgb(${red}, ${green},${blue})`;
}
class Action extends Component {
  render(props) {  
    if (this.props.msg.seen) {
      this.seen = "true";
    } else {
      this.seen = "false";
    }
    if (this.props.msg.owner) {
      this.side = "my";
      this.name = this.props.me.name;
      this.avater = this.props.me.img;
    } else {
      this.side = "other";
      this.name = this.props.who.name;
      this.avater = this.props.who.picture;
    }
    if (this.props.type === "channal") {
      if (this.props.msg.img === "") {
        this.img = "";
      } else {
        this.img = (
          <div className="img">
            <img src={this.props.msg.img} alt={this.props.msg.title} />
          </div>
        );
      }
      if (this.props.msg.title === "") {
        this.title = "";
      } else {
        this.title = <div className="title">{this.props.msg.title}</div>;
      }
      this.action = (
        <div className="action" id={this.props.msg.id}>
          <div className="con-channal">
            {this.title}
            {this.img}
            <div className="body">{this.props.msg.body}</div>
            <div className="bottom">
              <span className="seen-amount">
                <span className="fa fa-eye" />
                {this.props.msg.seenAmount}
              </span>
              <span className="author">{this.props.msg.author}</span>
              <span className="time">{this.props.msg.time}</span>
            </div>
          </div>
        </div>
      );
    } else if (this.props.type === "single") {
      this.action = (
        <div className="action">
          <div className={`con ${this.side}`}>
            <div className="text-box">
              <div className="text">
                <div className="msg">{this.props.msg.text}</div>
                <div className="time-stamp">
                  <div className="time">{this.props.msg.time}</div>
                  <div className={`seen ${this.seen}`}>
                    <span className="fa fa-eye" />
                  </div>
                </div>
              </div>
            </div>

            <div className="img-box">
              <span className="fa fa-caret-right" />
              <div
                className="img"
                style={{ background: `${AvaterColor()}` }}
              >
                <img src={this.avater} alt="" />
                <span className="ava" id={this.name}>
                  {this.name.slice(0, 1).toUpperCase()}
                </span> 
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.type === "group") {
      if(this.props.msg.sender){
        this.sideG = 'other';
        this.avaterG = this.props.msg.sender.img;
        this.nameG = this.props.msg.sender;        
      }else{
        this.sideG = 'my';
        this.avaterG = this.props.me.img;
        this.nameG = this.props.me;
      }
      this.action = (
        <div className="action">
          <div className={`con ${this.sideG}`}>
            <div className="text-box">
              <div className="text">
                <div className="name">{this.props.msg.sender.name}</div>
                <div className="msg">{this.props.msg.text}</div>
                <div className="time-stamp">
                  <div className="time">{this.props.msg.time}</div>
                  <div className={`seen ${this.seen}`}>
                    <span className="fa fa-eye" />
                  </div>
                </div>
              </div>
            </div>

            <div className="img-box">
              <span className="fa fa-caret-right" />
              <div
                className="img"
                style={{ background: `${AvaterColor()}` }}
              >
                <img src={this.avaterG} alt="" />
                <span className="ava" id={this.nameG.id}>
                  {this.nameG.name.slice(0, 1).toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{this.action}</div>;
  }
}

export default Action;
