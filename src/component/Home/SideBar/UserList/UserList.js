import React from "react";
import "./UserList.css";
import Users from "./Users/Users";
import Scroll from "./../../../Arsenal/Scroll";

export default ({bar,setWho,msg,type}) => {  
  if (bar !== undefined) {
    return (
      <div className="user-list">
        <Scroll>
          {bar.map((list, i) => {
            for(var j = 0;j<msg.length;j++){
              if(msg[j].id === bar[i].id){
                var lastMsg = msg[j].content[msg[j].content.length -1];                
              }
            }
            return (
              <div key={i} className="users">
                <Users
                  user={bar[i]}
                  setWho={setWho}
                  type={type}
                  msg={lastMsg}
                />
              </div>
            );
          })}
        </Scroll>
      </div>
    );
  } else {
    return null;
  }
};
