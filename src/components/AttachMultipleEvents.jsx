import React from 'react';

window.abc = function() {
    alert("sagdfaj")
}

export default class AttachMultipleEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.getData = this.getData.bind(this);
    }

    getData(event) {
        debugger;
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 1
            }, () => {
                this.setState({
                    counter: this.state.counter + 1
                })
            })
        })
    }

    render() {
        return (
            <div onClick={this.getData}>
                <div id="1"><h1>Counter: {this.state.counter}</h1><input type="button" value="Delete" onClick id="delete-data-1"></input></div>
                <div id="2"><h1>Counter: {this.state.counter}</h1><input type="button" value="Delete" onClick id="delete-data-2"></input></div>
                <div id="3"><h1>Counter: {this.state.counter}</h1><input type="button" value="Delete" onClick id="delete-data-3"></input></div>
                <div id="4"><h1>Counter: {this.state.counter}</h1><input type="button" value="Delete" onClick id="delete-data-4"></input></div>
                <div id="5"><h1>Counter: {this.state.counter}</h1><input type="button" value="Delete" onClick id="delete-data-5"></input></div>
            </div>
        )
    }
}