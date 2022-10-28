import React from "react";
//style
import "./ActionList.css";
//components
import Action from "./Action/Action";

export default props => {
  if(props.view !== undefined){   
    if(props.view.content!== undefined){ 
      let msg = props.view.content;
    return (
      <div className="action-list-o">
        <div className="con">
          {msg.map((user, i) => {
            return (
              <div key={i} className="action-o">
                <Action msg={msg[i]} type={props.type} who={props.who} me={props.me}/>
              </div>
            );
          })}
          <div className="gutter" />
        </div>
      </div>
    );
        }else{
          return null;
        }
        }else{
          return null;
        }
}
// {
//   id: 1,
//     name: "kenenisa",
//       owner: true,
//         photo: "favicon.ico",
//           msg: "line is heigjkj;lkj;lj jlkj klkkj;l lklk;j llkl k;ht baba",
//             time: "02:15",
//               seen: true
// },
