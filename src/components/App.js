import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends PureComponent {
  constructor(props) {
    // super calls PureComponents constructor
    super(props);
    this.formattedTextRef = React.createRef();
  }
  state = {
    // hi: 'there' ==>
    count: 0, 
    text: '', 
    formattedText: '',
    font: 'Basic',
    img: ''
    
  };

  saveFile = () => {
    fileSaver.saveAs(this.state.img);

  }

  textToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.formattedTextRef.current)
    .then(img => {
      this.setState({ img })
    });
  };

  formatText = () => {
    const { font } = this.state;
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
    const { text, formattedText, font, img } = this.state;
    const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Basic', 'Lil Devil'].map(f => {
      return <option key={f} value={f}>{f}</option>
    });

    return (
      <>
      <form onSubmit={this.textToImage}>
      <select name="font" onChange={this.handleChange} value={font}> 
      {fontOptions}
      </select>
      <input type="text" name="text" value={text} onChange={this.handleChange} />
      <button type="submit">Create Image</button>
      </form>
      <h1>{text}</h1>
      <h2 ref={this.formattedTextRef}><pre>{formattedText}</pre></h2>
      {img && <img src={img} />}
      {img && <button onClick={this.saveFile}>Save File</button>}  
      <button onClick={this.handleClick} >Click</button>
      </>
    );
  }
}