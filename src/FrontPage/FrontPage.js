import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actions'
class FrontPage extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.increment}>INCREASE</button>
        <button onClick={this.props.decrement}>DECREASE</button>
        <h1>{this.props.reduxCounter}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        reduxCounter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: actionTypes.INCREASE_COUNTER}),
        decrement: () => dispatch({type: actionTypes.DECREASE_COUNTER})

    }
}

export default connect( mapStateToProps, mapDispatchToProps )( FrontPage );
