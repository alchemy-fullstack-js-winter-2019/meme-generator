import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';

//class components are used when we need to store state
export default class App extends PureComponent {
  handleClick = () => {
    console.log('clicked');
  }

  render() {
    return (
      <Fragment>
        <h1>Hello TEONNA</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </Fragment>
    );
  }
}
