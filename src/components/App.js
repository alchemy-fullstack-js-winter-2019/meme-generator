import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class App extends PureComponent {
  state = {
    hi: 'there',
    count: 0,
    text: '',
    formatedText: ''
  }

  formatText = () => {
    const font = 'Ghost';
    figlet.text(this.state.text,
      { font },
      (err, formatedText) => {
        if(err) return console.error(err);

        this.setState({ formatedText });
    });
  }

  handleClick = () => {
    this.setState({ hi: 'you', count: this.state.count + 1 }, () => {
      console.log(this.state.hi, this.state.count);
      console.log('yo');
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, this.formatText);
  }

  render() {
    return (
      <>
        <h1>Hi</h1>
        <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
        <h1>{this.state.text}</h1>
        <h2><pre>{this.state.formatedText}</pre></h2>
        <button onClick={this.handleClick}>Click Me!</button>
      </>
    );
  }
}
