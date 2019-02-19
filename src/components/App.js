import React, { PureComponent }from 'react';

class App extends PureComponent {
  state = {
    count: 0,
    text: ''
  };

handleClick = () => {
  const { count } = this.state;
  this.setState({ count: count + 1 }, () => {
    console.log(this.state.count, 'click/s');
  }); 
};
handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
};

  render() {
    const { text } = this.state;
    return (
      <>
      <h1>Hello</h1>
      <button onClick={this.handleClick}>click</button>
      <input type="text" name="text" value={text} onChange={this.handleChange} />
      <h2>{text}</h2>
      </>
    );
  }
}
export default App;