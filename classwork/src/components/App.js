import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domimage from 'dom-to-image';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.formattedTextRef = React.createRef();
  }

  state = {
    hi: 'there',
    count: 0,
    text: '',
    formattedText: '',
    font: 'Ghost',
    img: ''
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

  handleClick = () => {
    this.setState({ hi: 'you', count: this.state.count + 1 }, () => {
      console.log(this.state.hi, this.state.count);
      console.log('yo');
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, this.formatText);
  }

  textToImage = event => {
    const node = document.getElementById('formattedText');
    event.preventDefault();
    domimage.toPng(node)
      .then(img => {
        this.setState({ img })
      });
  }

  saveFile = () => fileSaver.saveAs(this.state.img);

  render() {
    const { text, font, formattedText, img } = this.state;
    const fontOptions = ['Ghost', '3-D', 'Train', 'Wavy'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });
    return (
      <>
        <form onSubmit={this.textToImage}>
          <input type="text" name="text" value={text} onChange={this.handleChange} />
          <button type="submit">Imagify!</button>
        </form>
        <h1>{text}</h1>
        <select name="font" value={font} onChange={this.handleChange}>
          {fontOptions}
        </select>
        <h2 id="formattedText"><pre>{formattedText}</pre></h2>
        {img && <img src={img} />}
        <button onClick={this.handleClick}>Click Me!</button>
      </>
    );
  }
}
