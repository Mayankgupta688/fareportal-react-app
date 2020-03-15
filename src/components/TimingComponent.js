import React from "react";

export default function TimingComponent() {

    var currentSeconds = new Date().getSeconds();

    setInterval(function() {
        currentSeconds = new Date().getSeconds();
        console.log(currentSeconds)
    }, 1000);

    return <h1>Current Time: {currentSeconds}</h1>
}