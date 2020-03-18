import React from 'react';

export default class FirstLifeCycle extends React.Component {
    constructor(props) {
        super();
        this.state = {
            timer: new Date().getSeconds(),
            name: "Mayank"
        }
    }

    componentDidMount() {
        this.setState({
            name: "Anshul"
        });
    }

    render() {
        return (
            <div>
                <h1>User Name: {this.state.name}</h1>
            </div>
        )
    }
}