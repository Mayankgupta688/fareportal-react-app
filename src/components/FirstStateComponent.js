import React from "react";

export default class FirstStateComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 20
        }
        var that = this;
        setTimeout(function() {
            that.state.name = "Anshul";
            // that.setState({
            //     name: "sdsiuguisg"
            // })
            alert(that.state.name)
        }, 1000)
    }
    
    render() {
        return <h1>{this.state.name}</h1>;
    }
}

