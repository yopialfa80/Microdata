import React, { Component } from 'react';
import { connect } from 'react-redux';

class ButtonCount extends Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement} style={styles.whitespace}>-</button>
                <span style={styles.whitespace}>{this.props.count}</span>
                <button onClick={this.increment} style={styles.whitespace}>+</button>
            </div>
        )
    }
}

const styles = {
    whitespace: {
        margin: '0 5px',
    }
};

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(ButtonCount);