/*eslint-disable no-console*/
import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';

//class components are used when we need to store state
export default class App extends PureComponent {
  state = {
    clicks: 0
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    console.log(this.state.clicks);
    console.log('clicked');
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Teonna</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </Fragment>
    );
  }
}
