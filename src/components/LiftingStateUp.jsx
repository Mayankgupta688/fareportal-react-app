import React from 'react';

export default class LiftingStateUp extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <>
                <h1>Counter Rendered From Parent: {this.state.counter}</h1>
                <input type="button" value="Click To Update Counter" onClick={this.updateCounter} /><hr/>
                <ChildComponent counter={this.state.counter} updateFromChild={this.updateCounter} />
            </>
        )
    }
}


class ChildComponent extends React.Component {

    updateFromChild = () => {
        this.props.updateFromChild();
    }

    render() {
        debugger;
        return (
            <>
                <h2>Counter from Child: {this.props.counter}</h2>
                <input type="button" onClick={this.props.updateFromChild} value="Update From Child" />
            </>
        )
    }
}