import React from 'react';
import axios from "axios";


export default class UsingAxios extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            empArray: [], 
            newUserId: "",
            newUserName: "",
            cancellablePromise: null
        }
    }

    componentDidMount() {

        var newPromise = new Promise((resolve) => {
            axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((res) =>{
                setTimeout(() => {
                    resolve(res.data);
                }, 5)
            });

        })

        newPromise.then((data) =>{
            this.setState({
                empArray: data
            });
        })
        
    }

    addEmployees = () => {
        debugger;
        this.setState({
                empArray: [{
                    name: this.state.newUserName,
                    id: this.state.newUserId
                },
                ...this.state.empArray
            ]
        })

        this.setState({
            newUserName: "",
            newUserId: ""
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
            <>
                New User Name: <input type="text" id="newUserName" onChange={this.setDataForInput}/><br/><br/>
                New User Id: <input type="text" id="newUserId" value={this.state.newUserId}   onChange={this.setDataForInput}/><br/><br/>
                <input type="button" onClick={this.addEmployees} value="Add Employee" /><br/><br/><hr/>
                
                
                {this.state.empArray.map((value, index) => {
                    return (
                        <React.Fragment key={value.id}>
                            <h1>User Name: {value.name}</h1>
                            <h1>User Id: {value.id}</h1><br/><hr/>
                        </React.Fragment>
                    )
                })}
            </>
        )
    }
}