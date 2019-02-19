import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class App extends PureComponent {
  state = {
    // hi: 'there' ==>
    count: 0, 
    text: '', 
    formatedText: ''
    
  };

  formatText = () => {
    const font = 'Ghost';
    figlet.text(this.state.text,
      { font },
      (err, formatedText) => {
        if(err) return console.error(err);

        this.setState({ formatedText });
      });
  };

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 }, () => {
      // this.setState({ hi: 'you' }) ==> update state to 'you'
      // console.log(this.state.hi); ==> display current value of state
      console.log(this.state.count);
      // console.log('Clicked');  ==> 
    });
  };

  handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value }, () => {
        this.formatText();
      });
  };

  render() {
    const { text, formatedText } = this.state;
    return (
      <>
      <input type="text" name="text" value={text} onChange={this.handleChange} />
      <h1>{text}</h1>
      <h2><pre>{formatedText}</pre></h2>
      <button onClick={this.handleClick} >
        Click 
      </button>
      </>
    );
  }
}