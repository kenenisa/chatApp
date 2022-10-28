import React from "react";
//style
import "./File.css";
//
export default props => {
  return (
    <div>
      <div className="default" onClick={props.back}>
        <span className="fa fa-arrow-left" />
      </div>
      <div className="file">
        <div className="items">
          <div className="item">
            <span className="fa fa-image" />
          </div>
          <div className="item">
            <span className="fa fa-music" />
          </div>
          <div className="item">
            <span className="fa fa-video-camera" />
          </div>
        </div>
        <div className="large-con hide" />
      </div>
    </div>
  );
};
