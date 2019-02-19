import React, { PureComponent } from 'react';


export default class App extends PureComponent {
  state = {
    clickCount: 0,
    text: null
  }
  handleClick = () => {
    let clickCount = this.state.clickCount;
    this.setState({ clickCount: clickCount + 1 }, () => {
      // eslint-disable-next-line no-console
      console.log(this.state.clickCount);
    });
  };
  handleChange = ({ target }) => {
    console.log(target.value);
   
  };
  render() {
    return (
        <>
          <h1>Hi</h1>
          <button onClick={this.handleClick}>Press me</button>
          <input id="text" type="text" onChange={this.handleChange}></input>
        </>
    );
  }
}
