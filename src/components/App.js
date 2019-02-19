import React, { PureComponent } from 'react';


export default class App extends PureComponent {
  state = {
    clickCount: 0
  }
  handleClick = () => {
    let clickCount = this.state.clickCount;
    this.setState({ clickCount: clickCount + 1 }, () => {
      console.log(this.state.clickCount);
    });
  };
  render() {
    return (
        <>
          <h1>Hi</h1>
          <button onClick={this.handleClick}>Press me</button>
        </>
    );
  }
}
