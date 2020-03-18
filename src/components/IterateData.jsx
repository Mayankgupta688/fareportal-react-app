import React from 'react';

export default class IterateData extends React.Component {
    constructor() {
        super();
        this.state = {
            empArray: [
                {name: "Mayank", age: 20},
                {name: "Anshul", age: 20},
                {name: "Ankit", age: 20},
                {name: "Randon", age: 20},
                {name: "Randon", age: 20},
            ]
        }
    }

    render() {
        return (
            <div>

                {this.state.empArray.map((value, index) => {
                    return (
                        <div>
                            <h1>User Name: {value.name}</h1>
                            <h1>User Age: {value.age}</h1><br/><hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}