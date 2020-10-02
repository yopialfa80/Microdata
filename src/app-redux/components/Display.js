import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return (
            <Fragment>
                <h2>COUNTER</h2>
                <h1>{this.props.count}</h1>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Display);
