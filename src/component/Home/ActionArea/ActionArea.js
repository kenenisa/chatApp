import React from "react";
//style
import "./ActionArea.css";
//components
import Connection from "./Connection/Connection";
import Send from "./Send/Send";
import ActionList from "./ActionList/ActionList";
import Notif from "./../../pages/Notif/Notif";
import Options from "./../../pages/Options/Options";
//tools
import Scroll from "./../../Arsenal/Scroll";

function extract(db, id) {
  for (var i = 0; i < db.length; i++) {
    if (db[i].id === id) {
      return db[i];
    }
  }
}

export default props => {
  let con;
  let list;
  let send;
  let action;
  if (props.page === "chat") {
    con = (
      <div className="connection">
        <Connection />
      </div>
    );
    if (props.type === "channal") {
      list = "expand";
    } else {
      send = (
        <div className="send-box">
          <Send />
        </div>
      );
      list = "";
    }
  } else {
    con = "";
    send = "";
    list = "expand";
  }
  let type;
  let who;
  switch (props.type) {
    case "single":
      type = props.db.single;
      who = props.db.profile.friends;
      break;
    case "group":
      type = props.db.group;
      who = props.db.profile.groups;
      break;
    case "channal":
      type = props.db.channal;
      who = props.db.profile.channal;
      break;
    default:
      type = [];
  }
  
  if (props.page === "chat") {
    action = (
      <ActionList
        type={props.type}
        view={extract(type, props.whoId)}
        who={extract(who, props.whoId)}
        me={{ id: props.db.profile.id,name:props.db.profile.name,img:props.db.profile.picture}}
      />
    );
  } else if (props.page === "Notifications") {
    action = <Notif view={props.db.Notifications} />;
  } else {
    action = <Options page={props.page} />;
  }
  return (
    <div className="action-area">
      {con}
      <div className={`action-list ${list}`}>
        <Scroll>{action}</Scroll>
      </div>
      {send}
    </div>
  );
};
