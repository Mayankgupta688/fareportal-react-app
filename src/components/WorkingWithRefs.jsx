import React from 'react';

export default class WorkingWithRefs extends React.Component {

    constructor() {
        super();
        this.state = {
            inputValue: "Mayank"
        }
    }

    getInputValue = () => {
        debugger;
        this.refs.uncontrolled.style.backgroundColor = "green";
        this.refs.uncontrolled.style.color = "red";
    }

    render() {
        return (
            <>
                User Name: <input type="text" value={this.state.inputValue} ref="uncontrolled" /><br/><br/>
                User Name: <input type="text" ref="uncontrolledOther" /><br/><br/>
                <input type="button" onClick={this.getInputValue} value="Get Input Values..." />
            </>
        )
    }
}