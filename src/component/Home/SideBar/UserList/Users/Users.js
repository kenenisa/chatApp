import React from "react";
import "./Users.css";

function AvaterColor() {
  let max = 200;
  let min = 100;
  let red = Math.floor(Math.random() * (max - min + 1) + min);
  let blue = Math.floor(Math.random() * (max - min + 1) + min);
  let green = Math.floor(Math.random() * (max - min + 1) + min);
  return `rgb(${red}, ${green},${blue})`;
}
export default ({user,setWho ,type,msg}) => {
  let text;
  let status;
  let name = '';
  if(type === "channal"){
    if(msg.title !== ""){
      text = msg.title;
    }else{
      text = msg.body
    }
    status = msg.time;
  }else if(type === "group"){
    if(user.online){
      status = `${user.online} online`;
    }else{
      status = `${user.members} members`;
    }
    if(msg.sender){
      text = `${msg.text}`;
      name = `${msg.sender.name} | `;
    }else{
      text = `${msg.text}`;
      name = 'me | '
    }
  }else{
    text = msg.text;
    status = user.online ? "online" : `${user.lastSeen}`;
  }
  
  return (
    <div className="user" onClick={setWho} id={user.id}>
      <div className="con" id={user.id}>
        <div className="text-con" id={user.id}>
          <div className="name" id={user.id}>
            <div className="text" id={user.id}>
              {user.name}
            </div>
            <div className="status" id={user.id}>
              {status}
            </div>
          </div>
          <div className="msg" id={user.id}>
            <span className="some" id={user.id}>
              {name}
            </span>
            {text}
          </div>
        </div>
        <div className="img-con" id={user.id}>
          <div
            className="img"
            id={user.id}
            style={{ background: `${AvaterColor()}` }}
          >
            <img src="" alt="" id={user.id} />
            <span className="ava" id={user.id}>
              {user.name.slice(0, 1).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
