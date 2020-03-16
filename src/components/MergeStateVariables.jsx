import React from 'react';

export default class MergeStateVariables extends React.Component {
    constructor(props) {
        debugger;
        super();
        this.state = {
            user: {
                name: "Mayank",
                employementHistory: [1, 2, 3, 4]
            }
        }

        var that = this;

        setTimeout(function() {
            that.setState({
                user: {
                    ...that.state.user,
                    age: 20,
                    employementHistory: [...that.state.user.employementHistory, 5]
                }
            })
        }, 1000)

        setTimeout(function() {
            that.setState({
                user: {
                    ...that.state.user,
                    designation: "Developer"
                }
            })
        }, 3000)
    }

    render() {
        return (
            <div>
                <h1>User Name: {this.state.user.name}</h1>
                <h3>User Age: {this.state.user.age}</h3>
                <h3>User Age: {this.state.user.designation}</h3>
                <h3>History: {this.state.user.employementHistory.length}</h3>
                <h4>Salary: {this.props.userdata.salary}</h4>
            </div>
        )
    }
}