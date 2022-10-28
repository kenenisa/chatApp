import React from "react";
//style
import "./Voice.css";
//
class Voice extends React.Component {
  constructor() {
    super();
    this.state = { button: false };
  }

  render(props) {
    if (this.state.button) {
      this.icon = "fa fa-paper-plane";
      this.background = "ragging";
      this.command = "Tab to Send";
    } else {
      this.icon = "fa fa-microphone";
      this.background = "";
      this.command = "Tab to Recored";
    }
    return (
      <div>
        <div className="default" onClick={this.props.back}>
          <span className="fa fa-arrow-left" />
        </div>
        <div className="audio-box">
          <div className="title">{this.command}</div>
          <div className="button">
            <button
              className={`${this.background}`}
              onClick={() => {
                this.setState({ button: !this.state.button });
              }}
            >
              <span className={`${this.icon}`} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Voice;
