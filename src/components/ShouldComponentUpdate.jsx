import React from 'react';

export default class  extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            debugger;
            this.setState({
                counter: this.state.counter + 1
            })
        }, (1000));
    }

    shouldComponentUpdate(updatedProps, updatedState) {
        debugger;
        if(updatedState.counter % 3 == 0) {
            return true;
        }
        return false;
    }

    render() {
        debugger;
        return <h1>Counter: {this.state.counter}</h1>
    }
}