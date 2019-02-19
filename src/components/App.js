import React, { PureComponent } from 'react';

export default class App extends PureComponent {

  // state can change over time but props stay the same
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
      <h1>hi</h1>
      <button onClick={this.handleClick}>click me</button>
      </>
    );
  }
}



