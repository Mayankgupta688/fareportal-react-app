import React from 'react';

export default class TestAsync extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    updateData() {
        
        this.setState((state, props) => {
            return {
                counter: state.counter + 1
            }
        })

        this.setState((state, props) => {
            return {
                counter: state.counter + 1
            }
        })

        this.setState((state, props) => {
            return {
                counter: state.counter + 1
            }
        })

        this.setState((state, props) => {
            return {
                counter: state.counter + 1
            }
        })
        
    }

    render() {
        return <input type="button" onClick={this.updateData.bind(this)} value={this.state.counter} />
    }
}