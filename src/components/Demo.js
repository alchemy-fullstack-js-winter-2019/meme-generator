import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.formattedTextRef = React.createRef();
  }
  //can update and change over time
  state = {
    count: 0,
    text: '',
    formattedText: '',
    font: 'Ghost',
    img: ''
  }
  //property class
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log('clicked');
  }

  handleChange = ({ target }) => {
    //target.name refers to name in input can have multiple 
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    }); 
  }

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text, 
      { font },
      (err, formattedText) => {
        if(err) return console.log(err);
        this.setState({ formattedText });
      });
  };

  textToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.formattedTextRef.current)
      .then(img => {
        this.setState({ img });
      });
  }

  saveFile = () => {
    fileSaver.saveAs(this.state.img);
  }

  render() {
    const { text, formattedText, font, img  } = this.state;
    const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Basic'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });

    return (
      <>  
        <form onSubmit={this.textToImage}>
          <select name="font" value={font} onChange={this.handleChange}>
            {fontOptions}
          </select>
          <input type="text"  name="text" onChange={this.handleChange} value={text} />
          <button type="submit"> Create Image</button>
        </form>
        <h1>{text}</h1>
        <h2 ref={this.formattedTextRef}><pre>{formattedText}</pre></h2>
        {img && <img src={img} />}
        {img && <button onClick={this.saveFile}>Save Image</button>}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
