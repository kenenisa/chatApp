import React, { Component } from "react";
import Options from "./Options/Options";
import MiniProfile from "./MiniProfile/MiniProfile";
import Scroll from "./../../Arsenal/Scroll";

import "./SlideArea.css";

class SlideArea extends Component {
  render(props) {
    if (this.props.switch) {
      this.slide = "open";
    } else {
      this.slide = "";      
    }
    return (
      <div className={`slide-area ${this.slide}`}>
        <div className="mini-profile">
          <MiniProfile />
        </div>
        <div className="options">
          <Scroll>
            <Options option={this.props.option}/>
          </Scroll>
        </div>
      </div>
    );
  }
}

export default SlideArea;
