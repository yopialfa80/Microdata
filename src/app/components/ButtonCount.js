import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button} from 'reactstrap';
import Display from './Display';
import SecondDisplay from './SecondDisplay';

class ButtonCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payCount:""
        };
    }

    setParameter = (parameter) => {
        this.setState({payCount : parameter});
    }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT', payload: this.state.payCount });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT', payload: this.state.payCount});
    }

    multiple = () => {
        this.props.dispatch({ type: 'SECOND_MULTIPLE', payload: this.state.payCount});
    }

    divide = () => {
        this.props.dispatch({ type: 'SECOND_DIVIDE', payload: this.state.payCount});
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET' });
    }

    render() {
        return (
            <div style={styles.center}>

                <div style={styles.space}>
                    <Display />
                    <Button color="danger" onClick={this.decrement} style={styles.whitespace}>-</Button>
                            <span style={styles.center}>{this.props.count}</span>
                    <Button color="primary" onClick={this.increment} style={styles.whitespace}>+</Button>
                </div>

                <div style={styles.space}>
                    <SecondDisplay/>
                    <Button color="danger" onClick={this.multiple} style={styles.whitespace}>*</Button>
                        <span style={styles.center}>{this.props.secondCount}</span>
                    <Button color="primary" onClick={this.divide} style={styles.whitespace}>/</Button>
                </div>

                    <Input placeholder='0' type="number" onChange={e => this.setParameter(e.target.value)}/>
                        <div style={styles.space}>
                    <Button color="primary" onClick={this.reset} style={styles.reset}>Reset</Button>
            
                </div>
            </div>
        )
    }
}

const styles = {
    whitespace: {
        margin: '0 5px',
    },
    space:{
        margin: '10px',
        padding: '10px',
    },
    center: {
        margin: 'auto',
        width: '50%',
        border: '3px',
        padding: '10px',
        marginBottom: '10px',
        textAlign:'center',
      },
      reset:{
          width: '300px',
      }
};

function mapStateToProps(state) {
    return {
        count: state.count,
        secondCount: state.secondCount
    };
}

export default connect(mapStateToProps)(ButtonCount);