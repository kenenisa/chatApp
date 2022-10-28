import React from "react";
//style
import "./Default.css";
//
export default (props) => {
  return (
    <div className="send">
      <div className="con">
        <div className="file circle pointer" onClick={props.file}>
          <span className="fa fa-paperclip" />
        </div>
        <div className="audio circle pointer" onClick={props.voice}>
          <span className="fa fa-microphone" />
        </div>
        <div className="form" onClick={props.text}>
          <div className="textarea">Text Message</div>
        </div>
        <div className="sticker circle pointer" onClick={props.sticker}>
          <span className="fa fa-smile-o" />
        </div>
      </div>
    </div>
  );
};
