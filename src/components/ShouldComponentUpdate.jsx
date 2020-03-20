import React from 'react';

export default class ShouldComponentUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        this.state.counter = 100;
        console
    }

    updateCounter() {
        this.forceUpdate();
    }

    shouldComponentUpdate(updatedProps, updatedState) {
        return true;
    }

    render() {
        return (
            <>
                <h1>Counter: {this.state.counter}</h1>
                <h1>Counter Value: {this.state.counter}</h1>
                <input type="button" onClick={this.updateCounter} value="Click to Update" />
            </>
        )
    }
}