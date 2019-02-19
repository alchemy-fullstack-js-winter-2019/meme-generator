import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  state = {
    hi: 'there',
    count: 0
  }

  handleClick = () => {
    this.setState({ hi: 'you', count: this.state.count + 1 });
    console.log(this.state.hi, this.state.count);
    console.log('yo');
  }

  render() {
    return (
      <>
        <h1>Hi</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </>
    );
  }
}
