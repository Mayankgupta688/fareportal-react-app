import React from "react";

export default function PropsReadOnly(props) {

    //props.tuwet = 1;
    props.salutation.salutation = "djsfhs";
    props.userData.salutation = "Xyz";
    props.userData.randomNewData = "dsfh"

    //props.userArr = [1,2 , 3, 4];
    props.userArr.push(5);
    return <h1>{props.userData.randomNewData}</h1>
}