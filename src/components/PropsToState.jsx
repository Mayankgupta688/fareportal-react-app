import React from 'react';

export default class PropsToState extends React.Component {
    constructor(props) {
        super();
        this.state = {
            timer: new Date().getSeconds(),
            name: "Mayank"
        }

        var that = this;

        setInterval(function() {
            that.setState({
                timer: new Date().getSeconds()
            })
        }, 1000)

        setInterval(function() {
            that.setState({
                name: "Anshul"
            })
        }, 5000)

        
    }

    render() {
        return (
            <div>
                <TimerComponent timer={this.state.timer} username={this.state.name} />
            </div>
        )
    }
}


class TimerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            age: 30
        }
        var that = this;
        setInterval(function() {
            that.setState({
                age: 20
            })
        }, 5000)
    }
    render() {
        return <OtherDumbComponent {...this.props} userage={this.state.age} />
    }
}

function OtherDumbComponent(props) {
    return(
        <div>
            <h1>Hello Updated Name: {props.username + " " + props.userage}</h1>
            <h2>Timer Count is Ticking: {props.timer}</h2>
        </div>
    )
}