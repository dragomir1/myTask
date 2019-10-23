import React, { Component } from 'react';

export default class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  incrementerHandler = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  decrementerHandler = () => {
    if (this.state.counter <= 1) {
      return;
    }
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementerHandler}>INCREASE</button>
        <button onClick={this.decrementerHandler}>DECREASE</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}
