import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.formattedTextRef = React.createRef();
  }

  state = {
    clickCount: 0,
    text: '',
    formattedText: '',
    font: 'Basic',
    img: ''
  };

  textToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.formattedTextRef.current)
      .then(img => {
        this.setState({ img }); 
      });
  }

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text,
      { font },
      (err, formattedText) => {
        if(err) return console.error(err);
        this.setState({ formattedText });
      });
  };

  saveFile = () => {
    fileSaver.saveAs(this.state.img);
  }
  
  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 }, () => {
      console.log('Click', this.state.count);
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };

  render() {
    const { text, formattedText } = this.state;
    const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Lil Devil'].map(f => {
      return <option key={f} value={f}>{f}</option>
      
    })
    return (
      <>
        <select name="font" onChange={this.handleChange} >
          {fontOptions}
        </select>
        <input type="text" name="text" value={text} onChange={this.handleChange} />
        <input type="text" name="anotherText" value={anotherText} onChange={this.handleChange} />
        <h1>{text}</h1>
        <h2><pre>{formattedText}</pre></h2>
        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.saveFile}
      </>
    );
  }
}
