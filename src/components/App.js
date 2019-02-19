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
    const heading = document.getElementById('heading');
    heading.innerHTML = target.value;
  };
  render() {
    return (
        <>
          <button onClick={this.handleClick}>Press me</button>
          <input id="text" type="text" onChange={this.handleChange}></input>
          <h1 id="heading"></h1>
        </>
    );
  }
}
