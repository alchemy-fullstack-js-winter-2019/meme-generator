import React, { PureComponent }from 'react';
import figlet from 'figlet';

class App extends PureComponent {
  state = {
    count: 0,
    text: '',
    formattedText: ''
  };

  formatText = () => {
    const font = 'Ghost';
    figlet.text(this.state.text, 
      { font },
      (err, formattedText) => {
      if(err) return console.error(err);
      this.setState({ formattedText });
    });
  };

handleClick = () => {
  const { count } = this.state;
  this.setState({ count: count + 1 }, () => {
    console.log(this.state.count, 'click/s');
  }); 
};
handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value }, () =>{
    this.formatText();
  });

};

  render() {
    const { text, formattedText } = this.state;
    return (
      <>
      <h1>Hello</h1>
      <h2><pre>{formattedText}</pre></h2>
      <button onClick={this.handleClick}>click</button>
      <input type="text" name="text" value={text} onChange={this.handleChange} />
      <h2>{text}</h2>
      </>
    );
  }
}



export default App;