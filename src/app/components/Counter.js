import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ButtonCount from './ButtonCount';

class Counter extends Component {
    
    render() {
        return (
            <Fragment>
                <ButtonCount />
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
        secondCount: state.secondCount
    };
}

export default connect(mapStateToProps)(Counter);
