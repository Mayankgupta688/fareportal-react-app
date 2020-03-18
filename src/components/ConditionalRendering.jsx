import React from 'react';

export default class ConditionalRendering extends React.Component {
    constructor() {
        super();
        this.state = {
            updateData: false,
            isTrue: true
        }
    }

    toggleValue = () => {
        this.setState({
            updateData: !this.state.updateData
        })
    }

    render() {
        var dat = (this.state.isTrue && this.state.updateData)
        return (
            <div>
                {(dat) && (
                    <div>
                        <h1>User Logged In...</h1>
                        {this.state.isTrue && <h1>User Logged In...</h1>}
                    </div>
                )}

                {(this.state.updateData && !this.state.isTrue) && <h1>User Logged In... Exceptional</h1>}

                {!this.state.updateData && <h1>User Not Logged In...</h1>}

                <input type="button" value="Toggle Boolean" onClick={this.toggleValue} />
            </div>
        )
    }
}