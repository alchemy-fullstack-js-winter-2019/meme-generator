import React, { PureComponent, Fragment } from 'react';

class App extends PureComponent {
  handleClick() {
    console.log('clicked!');
  }
  render() {
    return (
      <Fragment>
        <h1>Heyo</h1>
        <button onClick={this.handleClick}>Button</button>
      </Fragment>
    );
  }
}

export default App;
