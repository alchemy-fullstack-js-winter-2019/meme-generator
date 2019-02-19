import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  //can update and change over time
  state = {
    count: 0,
    text: ''
  }
  //property class
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log('clicked');
  }
  onChange = ({ target }) => {
    //target.name refers to name in input can have multiple 
    this.setState({ [target.name]: target.value });
    
  }

  render() {
    return (
      <>  
        <button onClick={this.handleClick}> Click Here</button>
        <input type = "text"  name="text" onChange={this.onChange} value={this.state.text}></input>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}
