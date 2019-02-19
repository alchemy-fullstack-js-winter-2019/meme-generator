import React, { PureComponent } from 'react';
import figlet from 'figlet';


export default class App extends PureComponent {
  state = {
    clickCount: 0,
    text: null,
    formatedText: '',
    font: 'Ghoulish'
  }
  handleClick = () => {
    let clickCount = this.state.clickCount;
    this.setState({ clickCount: clickCount + 1 }, () => {
      // eslint-disable-next-line no-console
      console.log(clickCount);
    });
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };
  formatText = () => {
    figlet.text(this.state.text, {
      font: this.state.font
    }, 
    (err, formatedText) => {
      if(err) return console.error(err);
      this.setState({ formatedText });
    });
  };
  render() {
    const fonts = ['Ghost', 'Ghoulish', 'Soft', 'Star Strips', 'Tombstone'];
    const listOfOptions = fonts.map(font => {
      return (
        <option key={font} value={font}>{font}</option>
      );
    });
    return (
        <>
          <button onClick={this.handleClick}>Press me</button>
          <input type="text" name="text" onChange={this.handleChange} value={this.text}></input>
          <select name="font" value={this.font} onChange={this.handleChange}>{listOfOptions}</select>
          <h1>{this.state.text}</h1>
          <h2><pre>{this.state.formatedText}</pre></h2>
        </>
    );
  }
}
