import React, { PureComponent, Fragment } from 'react';

class App extends PureComponent {
  state = {
    clickCount: 0
  }

  handleClick = () => {
    this.setState({ clickCount: this.state.clickCount + 1 });
    console.log('clicked', this.state.clickCount, 'times');
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
