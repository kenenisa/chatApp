import React from "react";
import "./Notif.css";

export default (props) => {
  return (
    <div onClick={props.notif}>
      <span className="fa fa-bell" />
    </div>
  );
};
