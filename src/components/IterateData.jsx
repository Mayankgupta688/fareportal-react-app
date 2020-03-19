import React from 'react';
import axios from "axios";


export default class IterateData extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            empArray: [
                {name: "Mayank", age: 20},
                {name: "Anshul", age: 20},
                {name: "Ankit", age: 20},
                {name: "Randon", age: 20},
            ], newUserAge: "",
            newUserName: ""
        }
    }

    addEmployees = () => {
        debugger;
        this.setState({
                empArray: [{
                    name: this.state.newUserName,
                    age: this.state.newUserAge
                },
                ...this.state.empArray
            ]
        })

        this.setState({
            newUserName: "",
            newUserAge: ""
        })
    }

    setDataForInput = (event) => {
        debugger;
        this.setState({
            [event.target.id]: event.target.value 
        })
    }

    render() {
        return (
            <div>
                New User Name: <input type="text" id="newUserName" onChange={this.setDataForInput}/><br/><br/>
                New User Age: <input type="text" id="newUserAge" value={this.state.newUserAge}   onChange={this.setDataForInput}/><br/><br/>
                <input type="button" onClick={this.addEmployees} value="Add Employee" /><br/><br/><hr/>
                {this.state.empArray.map((value, index) => {
                    return (
                        <div key={index}>
                            Enter Additional Data: <input type="text"/>
                            <h1>User Name: {value.name}</h1>
                            <h1>User Age: {value.age}</h1><br/><hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}