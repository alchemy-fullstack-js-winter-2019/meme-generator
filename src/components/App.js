import React, { PureComponent, Fragment } from 'react';

class App extends PureComponent {
  state = {
    clickCount: 0,
    text: 'test text'
  }

  handleClick = () => {
    this.setState({ clickCount: this.state.clickCount + 1 }, () => {
      console.log('clicked', this.state.clickCount, 'times');
    });
  }


  render() {
    return (
      <Fragment>
        <h1>Heyo</h1>
        <input type="text" onChange={this.setState}></input>
        <button onClick={this.handleClick}>Button</button>
        <h1>{this.state.text}</h1>
      </Fragment>
    );
  }
}

export default App;
