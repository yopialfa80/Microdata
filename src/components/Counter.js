import React, { Component, Fragment } from 'react';
import Display from './Display';
import ButtonCount from './ButtonCount';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
        };
    }

    //onCounterChange = (params) => this.setState({ count: params });

    render() {
        return (
            <Fragment>
                <h2>COUNTER</h2>
                <h1>{this.state.count}</h1>
                <ButtonCount count={this.state.count}/>
            </Fragment>
        )
    }
}
