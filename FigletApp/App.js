import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import FileSaver from './FileSaver';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    // Above is default constructor (if left off) 
    // Super calls PureComponents constructor
    this.formattedTextRef = React.createRef();
  }
  // state can change over time but props stay the same
  state = {
    count: 0, 
    text: 'custom text',
    formattedText: '',
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
      (err, formattedText) => {
        if(err) return console.error(err);
        this.setState({ formattedText });
      });
  }

  textToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.formattedTextRef.current)
      .then(image => {
        this.setState({ image });
      });
  }
 
  render() {
    const { font, text, formattedText, img } = this.state;

    const fontList = ['Chunky', 'Arrows', 'Bubble', 'Catwalk', 'Computer'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    return (
      <>
      <h1>Meme Generator</h1>
      <form onSubmit={this.textToImage}>
        <select name="font" onChange={this.handleInput} value={font}>
          {fontList}
        </select>
        <input type="text" name="text" onChange={this.handleInput} value={text}></input>
        <button type="submit">Make Meme</button>
      </form>
      <h2>{text}</h2>
      <h1 ref={this.formattedTextRef}><pre>{formattedText}</pre></h1>
      {img && <FileSaver img={img} />}
      <button onClick={this.handleClick}>click me</button>
      </>
    );
  }
}



