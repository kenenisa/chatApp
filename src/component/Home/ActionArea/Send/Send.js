import React, { Component } from "react";
//style
import "./Send.css";
//componetns
import Default from "./Default/Default";
import File from "./File/File";
import Sticker from "./Sticker/Sticker";
import Text from "./Text/Text";
import Voice from "./Voice/Voice";
//
class Send extends Component {
  constructor() {
    super();
    this.state = {
      send: "default"
    };
  }
  componentDidMount() {
    // document.getElementById("msg").addEventListener("click", () => {
    //     this.setState({ text: 'max' });
    // });
  }
  render() {
    if (this.state.send === "default") {
      this.send = (
        <Default
          file={() => {
            this.setState({ send: "file" });
          }}
          voice={() => {
            this.setState({ send: "voice" });
          }}
          text={() => {
            this.setState({ send: "text" });
          }}
          sticker={() => {
            this.setState({ send: "sticker" });
          }}
        />
      );
    } else if (this.state.send === "text") {
      this.send = (
        <Text
          back={() => {
            this.setState({ send: "default" });
          }}
        />
      );
    } else if (this.state.send === "sticker") {
      this.send = (
        <Sticker
          back={() => {
            this.setState({ send: "default" });
          }}
        />
      );
    } else if (this.state.send === "file") {
      this.send = (
        <File
          back={() => {
            this.setState({ send: "default" });
          }}
        />
      );
    } else if (this.state.send === "voice") {
      this.send = (
        <Voice
          back={() => {
            this.setState({ send: "default" });
          }}
        />
      );
    }
    return <div className="send-con">{this.send}</div>;
  }
}

export default Send;
