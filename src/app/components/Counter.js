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

    onCounterChange = (params) => {
        this.setState({ count: params });
    }

    render() {
        return (
            <Fragment>
                <Display count={this.state.count}/>
                <ButtonCount count={this.state.count} onCounterChange={this.onCounterChange}/>
            </Fragment>
        )
    }
}
