import React from 'react';

class SuperComponent extends React.Component {

    constructor() {
        super();
        this.getDetails = this.getDetails.bind(this);
    }

    getDetails() {
        return <h1>User Name: {this.state.name}</h1>
    }

    render() {
        return (
            <>
                <h1>The Current User is {this.state.name}</h1>
            </>
        )
    }
}

// SuperComponent.prototype.getDetails
// SuperComponent.prototype.render


export default class ComponentInheritence extends SuperComponent {
    constructor() {
        super();
        this.state = {
            name: "Mayank Gupta"
        }   
    }

    render() {
        return (
            <>
                <h1>This area is comprolled by this Class Itself</h1>

                {super.render()}
                {this.getDetails()}
            </>
        )
    }
}

// ComponentInheritenceObject.__proto__ = SuperComponent.prototype
// ComponentInheritence.prototype.render