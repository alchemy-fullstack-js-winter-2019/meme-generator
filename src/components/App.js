import React, { PureComponent } from 'react';
import figlet from 'figlet';
import DomToImage from 'dom-to-image';
import fileSaver from 'fileSaver';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.formattedTextRef = React.createRef();
  }

  state = {
    count: 0,
    text: '',
    formatedText: '',
    font: 'Basic',
    img:''
  };

  saveFile = () => {
    fileSaver.saveAs(this.state.img);
  };

  textToImage = event => {
    event.preventDefault();
    DomToImage.toPng(this.formattedTextRef.current)
      .then(img => {
        this.setState({ img });
      });
  };

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text,
      { font },
      (err, formatedText) => {
        if(err) return console.error(err);

        this.setState({ formatedText });
      });
  };

  handleClick = () => {
    const { count } = this.state;
    this.setState ({ count: count + 1 }, () => {
      console.log('Click', this.state.count);
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };

  render() {
    const { text, formatedText, font, img } = this.state;

    const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Basic', 'Lil Devil'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });

    return (
      <>
        <form onSubmit={this.textToImage}>
          <select name="font" onChange={this.handleChange} value={font}>
            {fontOptions}
          </select>
          <input type="text" name="text" value={text} onChange={this.handleChange}/>
          <button type="submit">Create Image</button>
        </form>

        <h2 ref={this.formattedTextRef}><pre>{formatedText}</pre></h2>
        {img && <img src= {img}/>}
        {img && <button onClick={this.saveFile}>SaveFile</button>}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
