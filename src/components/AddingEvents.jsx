import React from 'react';



export default class AddingEvents extends React.Component {
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
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <input type="button" value="Click To Add To Counter" onClick={this.getData} />
            </div>
        )
    }
}