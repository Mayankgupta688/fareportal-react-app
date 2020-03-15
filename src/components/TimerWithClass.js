import React from "react";

function Employee() {
    this.name = "Mayank"
    this.age = 10
}


Employee.prototype.getDetails = function() {
    console.log(this.name)
}

Employee.prototype.getDetails = function() {
    this.name = age + 1
}



export default class TimerWithClass extends React.Component {

    

    constructor() {
        super();
        this.state = {
            employeeData: new Employee()
        }

        setTimeout(() => {
            this.setState({})
        }, 1000)    


    }

    

    render() {
        return (
            <div>
                <h2>Hello World...{this.state.employeeData.age}</h2>
            </div>
        )
    }
}