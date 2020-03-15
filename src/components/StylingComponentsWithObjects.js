import React from "react";
import "../stylings/AppStyling.css"



var color = "red";

var theme = {
    h1: {
        color: "red",
        backgroundColor: "green",
        marginLeft: "10px",
        border: "1px solid blue"
    }, h2: {
        color: "green"
    }
}

export default function StylingComponentsWithObjects(props) {
    console.log(props.className)
    debugger;
    return (
        <div className="dataClass">
            <h1 className={props.className}>Hello World</h1>
            <h2>This is Sample Application</h2>
        </div>
    )
}