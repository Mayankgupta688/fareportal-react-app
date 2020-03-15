import React from "react";

export default function RenderPropsData(props) {
    props.salutation = "Sample";
    return (<div>Hello {props.salutation}...</div>)
}