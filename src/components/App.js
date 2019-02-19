import React, { PureComponent }from 'react';

class App extends PureComponent {
  state = {
    count: 0
  };

handleClick = () => {
  const { count } = this.state;
  this.setState({ count: count + 1 }, () => {
    console.log(this.state.count);
  }); 
};

  render() {
    return (
      <>
      <h1>Hello</h1>
      <button onClick={this.handleClick}>click</button>
      </>
    );
  }
}
export default App;