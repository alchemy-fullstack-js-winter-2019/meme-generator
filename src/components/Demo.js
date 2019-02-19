import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class App extends PureComponent {
  //can update and change over time
  state = {
    count: 0,
    text: '',
    formatedText: '',
    font: 'Ghost'
  }
  //property class
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log('clicked');
  }

  onChange = ({ target }) => {
    //target.name refers to name in input can have multiple 
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    }); 
  }

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text, 
      { font },
      (err, formatedText) => {
        if(err) return console.log(err);
        this.setState({ formatedText });
      });
  };

  render() {
    const { text, formatedText, font } = this.state;
    const fontOptions= ['Ghost', 'Weird', 'Chunky', 'Basic'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });

    return (

      <>  
        <select name="font" value={font} onChange={this.onChange}>{fontOptions}</select>
        <button onClick={this.handleClick}> Click Here</button>
        <input type="text"  name="text" onChange={this.onChange} value={this.state.text}></input>
        <h1>{text}</h1>
        <h2><pre>{formatedText}</pre></h2>
      </>
    );
  }
}
