import React, { Component } from 'react'

export default class ButtonCount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.count
        };
    }

    handleCounterChange = (params) => {
        this.props.onCounterChange(params);
    }


    increment = () => {
        this.setState(
            { count: this.state.count + 1 },
            () => { this.handleCounterChange(this.state.count) }
        );
    }

    decrement = () => {
        this.setState(
            { count: this.state.count - 1 },
            () => { this.handleCounterChange(this.state.count) }
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
