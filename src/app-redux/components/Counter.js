import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Display from './Display';
import ButtonCount from './ButtonCount';

class Counter extends Component {
    
    render() {
        return (
            <Fragment>
                <Display />
                <ButtonCount />
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);
