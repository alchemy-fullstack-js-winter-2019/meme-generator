import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  render() {
    return (
      <>  
        <h1>HI</h1>
        <button onClick={this.handleClick}> Click Here</button>
      </>
    );
  }
  handleClick() {
    console.log('clicked');
  }
}
