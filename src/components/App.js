import React, { PureComponent } from 'react';
import figlet from 'figlet';
import styles from '../components/css/App.css';
import domToImage from 'dom-to-image';

export default class App extends PureComponent {

  // state can change over time but props stay the same
  state = {
    count: 0, 
    text: 'custom text',
    formatedText: '',
    font: 'Chunky',
    img: ''
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
    const { font } = this.state;
    figlet.text(this.state.text,
      { font },
      (err, formatedText) => {
        this.setState({ formatedText });
      });
  }
 
  render() {

    const fontList = ['Chunky', 'Arrows', 'Bubble', 'Catwalk', 'Computer'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    return (
      <>
      <h1>Hi</h1>
      <form className={styles.form}>
        <select name="font" onChange={this.handleInput} value={this.state.font}>
          <option value="">Pick a font</option>
          {fontList}
        </select>
        <input name="text" onChange={this.handleInput} value={this.state.text}></input>
      </form>
      <button onClick={this.handleClick}>click me</button>
      <h1><pre>{this.state.formatedText}</pre></h1>
      </>
    );
  }
}



