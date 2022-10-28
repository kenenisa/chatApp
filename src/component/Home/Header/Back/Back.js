import React from 'react'
import "./Back.css";

export default (props) => {
  return (
    <div className="back" onClick={props.back}>
      <span className="fa fa-arrow-left" />
    </div>
  );
}
