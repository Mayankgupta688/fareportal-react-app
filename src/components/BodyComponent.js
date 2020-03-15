import React from "react";

var name = "Mayank";

export default function GetSurName() {
    return <div></div>;
}

export function BodyComponent() {
    return (
        <div>
            <div>
                <p>
    <label>This is the Label </label>
                    <b> { name }</b>
                </p>
            </div>
        </div>
    )
}