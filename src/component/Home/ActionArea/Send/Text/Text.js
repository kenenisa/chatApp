import React from "react";
//style
import "./Text.css";
//
export default props => {
  return (
    <div className="text-area">
      <div className="default" onClick={props.back}>
        <span className="fa fa-arrow-left" />
      </div>
      <textarea placeholder="Text Message" />
      <button>
        <span className="fa fa-arrow-up" />
      </button>
    </div>
  );
};
