import React from "react";
const Deselect = props => {
    return <div onClick={props.deselect}>{props.children}</div>;
};

export default Deselect;
