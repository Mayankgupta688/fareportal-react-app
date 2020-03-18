import React from 'react';

export default class WorkingWithforms extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            designation: ""
        }
        this.getData = this.getData.bind(this)
        this.updateName = this.updateName.bind(this);
    }

    getData() {
        alert(this.state.name);
    }

    updateName(event) {
        debugger;
        this.setState({
            [event.target.dataset.custom]: event.target.value
        });
    }

    render() {
        return (
            <div>
                Input User Name:        <input data-custom="name" data-abc="jhasfd" id="name" type="text" value={this.state.name} onChange={this.updateName} /> {this.state.name}<br/><br/>
                Input User Age:         <input data-custom="age" id="age" type="text" value={this.state.age} onChange={this.updateName} />{this.state.age}<br/><br/>
                Input User Designation: <input data-custom="designation" id="designation" type="text" value={this.state.designation} onChange={this.updateName} />{this.state.designation}<br/><br/>

                <input type="button" onClick={this.getData} value="Click" />
            </div>
        )
    }
}