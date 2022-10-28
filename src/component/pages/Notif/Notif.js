import React from "react";
//style
import "./Notif.css";


export default (props) => {
  let btn;    
    if(props.view !== undefined){
    return (
      <div className="notif-box">
        <div className="con">
          {props.view.map((notif, i) => {
            if (props.view[i].type === "r") {
              btn = (
                <div>
                  <button>Accept</button>
                  <button>Decline</button>
                </div>
              );
            } else if (props.view[i].type === "u") {
              btn = <button>Update</button>;
            } else {
              btn = <button>See</button>;
            }
            return (
              <div className="item" key={i}>
                <div className="img">
                  <img src={props.view[i].img} alt="notif" />
                </div>
                <div className="content">
                  <div className="text">{props.view[i].text}</div>
                  <div className="buttons">{btn}</div>
                  <div className="time">{props.view[i].time}</div>
                </div>
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
      }





// {
//   id: 0,
//     img: "favicon.ico",
//       text: "some one just sent u a friend request",
//         type: "r",
//           time: "19:05"
// },
// {
//   id: 1,
//     img: "favicon.ico",
//       text: "guy changed his propfile picture",
//         type: "n",
//           time: "23:34"
// },
// {
//   id: 2,
//     img: "favicon.ico",
//       text: "we have updated to 2.2.1",
//         type: "u",
//           time: "00:45"
// }