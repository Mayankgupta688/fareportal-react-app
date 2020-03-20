import React from 'react';

export default class ChildComponentPropsUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            userdetails: {
                name: "Mayank",
                age: 10,
                designation: "Software"
            }
        }
    }

    componentDidMount() {
        this.state.counter = 100;
    }

    updateStateData = () => {
        this.setState({
            userdetails: {
                ...this.state.userdetails,
                name: "Mayank Gupta sdsdsa"
            }
        })
    }

    updateForce = () => {
        this.forceUpdate();
    }

    shouldComponentUpdate(updatedProps, updatedState) {
        return true;
    }

    getCurrentAge = () => {
        alert(this.state.userdetails.age)
    }

    render() {
        return (
            <>
                <h1>Counter: {this.state.counter}</h1>
                <h1>Counter Value: {this.state.counter}</h1>
                <input type="button" onClick={this.updateStateData} value="Click to Update" /><br/><br/>
                <input type="button" onClick={this.updateForce} value="Force Update" />
                <input type="button" onClick={this.getCurrentAge} value="Click to Get Age" /><br/><br/><hr/>
                <ChildContainerClass userdetails={this.state.userdetails}></ChildContainerClass>
            </>
        )
    }
}

class ChildContainerClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.userdetails.name
        }
    }

    getCurrentAge = () => {
        alert(this.props.userdetails.age)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.userdetails.name == "Mayank Gupta") {
            return true
        }
        return false;
    }

    forceChildUpdate = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <>
                <DumbComponent userdetails={this.props.userdetails} name={this.state.name} />
                <h1>Name from Parent State {this.state.name}</h1>
                <h2>User Age: {this.props.userdetails.age}</h2>
                <h2>User Designation: {this.props.userdetails.designation}</h2>
                <input type="button" onClick={this.getCurrentAge} value="Click to Get Age" /><br/><br/>
                <input type="button" onClick={this.forceChildUpdate} value="Force UpdateChild" /><br/><br/>
            </>
        )
    }
}

function DumbComponent(props) {
    return (
        <>
            <h1>User Name Display from Sub Child: {props.userdetails.name}</h1>
            <h1>User Name Display from Sub Child State: {props.name}</h1>
        </>
    )
}