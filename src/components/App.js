import React, { PureComponent } from 'react';


export default class App extends PureComponent {
  handleClick = () => {
    return console.log('Clicked');
  };
  render() {
    return (
        <>
          <h1>Hi</h1>
          <button onClick={this.handleClick} >Press me</button>
        </>
    );
  }
}
