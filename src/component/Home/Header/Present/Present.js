import React from "react";
import "./Present.css";
function AvaterColor() {
  let max = 200;
  let min = 100;
  let red = Math.floor(Math.random() * (max - min + 1) + min);
  let blue = Math.floor(Math.random() * (max - min + 1) + min);
  let green = Math.floor(Math.random() * (max - min + 1) + min);
  return `rgb(${red}, ${green},${blue})`;
}
export default props => {
  let channal;
  let online;
  let img;

  if (props.who !== undefined) {
    if (props.type === "channal") {
      channal = "middle";
      online = "";
    } else if (props.type === "single") {
      channal = "";
      online = props.who.online ? `online` : "Left at " + props.who.lastSeen;
    } else if (props.type === "group") {
      channal = "";
      if (props.who.online) {
        online = `${props.who.members} members, ${props.who.online} online`;
      } else {
        online = `${props.who.members} members`;
      }
    }
    if (props.who.picture === "") {
      img = "";
    } else {
      img = <img src={props.who.picture} alt="" />;
    }
    return (
      <div className="present">
        <div className="con">
          <div className="img" style={{ background: `${AvaterColor()}` }}>
            {img}
            <span className="ava">
              {props.who.name.slice(0, 1).toUpperCase()}
            </span>
          </div>
          <div className="text">
            <span className={`name ${channal}`}>{props.who.name}</span>
            <span className="status">{online}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
/**
 * red 182 - 135
 */
