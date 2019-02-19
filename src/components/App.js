import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class App extends PureComponent {

  // state can change over time but props stay the same
  state = {
    count: 0, 
    text: 'custom text',
    formattedText: ''
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  // To make this reusable across all inputs we can add new text key to state that corrisponds to the value for the input (and anywhere else you use that input text)
  // controlled form - the values are controlled by state 
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value }, this.formatText);
  }

  formatText = () => {
    figlet.text(this.state.text, {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, (err, formattedText) => {
      this.setState({ formattedText });
      console.log({ formattedText });
    });
  }
 
  render() {
    return (
      <>
      <h1>hi</h1>
      <button onClick={this.handleClick}>click me</button>
      <input name="text" onChange={this.handleInput} value={this.state.text}></input>
      <h1 >{this.state.formattedText}</h1>
      </>
    );
  }
}



