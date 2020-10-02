import React, { Component, Fragment } from 'react';

export default class Display extends Component {
    render() {
        return (
            <Fragment>
                <h2>COUNTER</h2>
                <h1>{this.props.count}</h1>
            </Fragment>
        )
    }
}
