import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Alert} from 'reactstrap';
class Display extends Component {
    render() {
        return (
            <Fragment>
                <Alert color="primary">COUNTER</Alert>
                <h1 style={styles.center}>{this.props.count}</h1>
            </Fragment>
        )
    }
}

const styles = {
    whitespace: {
        margin: '0 5px',
    },
    center: {
        margin: 'auto',
        width: '50%',
        border: '3px',
        padding: '10px',
        marginBottom: '10px',
        textAlign:'center',
      }
};

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Display);
