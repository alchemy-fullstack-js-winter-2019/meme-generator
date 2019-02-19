import React, { PureComponent } from 'react';


export default class App extends PureComponent {
  state = {
    clickCount: 0,
    text: null
  }
  handleClick = () => {
    let clickCount = this.state.clickCount;
    this.setState({ clickCount: clickCount + 1 }, () => {
      console.log(clickCount);
    });
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  render() {
    return (
        <>
          <button onClick={this.handleClick}>Press me</button>
          <input type="text" name="text" onChange={this.handleChange} value={this.text}></input>
          <h1>{this.state.text}</h1>
        </>
    );
  }
}
