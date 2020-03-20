import React from 'react';

export default class WorkingWithChildren extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }

    render() {
        debugger;
        return (
            <>
                {this.props.children[0]}
                <h2>To the User: {this.state.name}</h2><hr/>
                <h3>Other Message:</h3>
                {this.props.children[1]? this.props.children[1]: null}<hr/>
                <h3>Lets Start</h3>
                {this.props.children[2]? this.props.children[2]: null}<hr/>
            </>
        )
    }
}