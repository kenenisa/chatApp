import React from "react";
import "./Tabs.css";


export default (props) => {
    return (
      <div className="tab">
        <div className={`slider ${props.slider}`} />
        <div className="first" onClick={()=> props.sliderTab('single')}>
          <span className="fa fa-user" />
        </div>
        <div className="second" onClick={() => props.sliderTab('group')}>
          <span className="fa fa-users" />
        </div>
        <div className="third" onClick={() => props.sliderTab('channal')}>
          <span className="fa fa-bullhorn" />
        </div>
      </div>
    );
  }

