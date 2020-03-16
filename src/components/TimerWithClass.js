import React from "react";

export default class TimerWithClass extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: new Date().getSeconds()
        }
        setInterval(() => {
            this.setState({
                timer: new Date().getSeconds()
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                <h2>Timer: {this.state.timer}</h2>
            </div>
        )
    }
}