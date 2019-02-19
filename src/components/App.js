import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends PureComponent {
  state = {
    clickCount: 0,
    text: null,
    formatedText: '',
    font: 'Ghoulish',
    img: ''
  }
  handleClick = () => {
    let clickCount = this.state.clickCount;
    this.setState({ clickCount: clickCount + 1 }, () => {
      // eslint-disable-next-line no-console
      console.log(clickCount);
      const node = document.getElementById('formatedText');
      domToImage.toPng(node)
        .then(dataUrl => {
          const img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
          this.setState({ img: dataUrl });
        })
        .catch(err => {
          console.error('oopies doopies, we made an errory weerrory', err);
        });
    });
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };
  formatText = () => {
    figlet.text(this.state.text, {
      font: this.state.font
    }, 
    (err, formatedText) => {
      // eslint-disable-next-line no-console
      if(err) return console.error(err);
      this.setState({ formatedText });
    });
  };
  saveFile = () => {
    fileSaver.saveAs(this.state.img);
  };
  render() {
    const fonts = ['Ghost', 'Ghoulish', 'Soft', 'Star Strips', 'Tombstone'];
    const listOfOptions = fonts.map(f => {
      return (
        <option key={f} value={f}>{f}</option>
      );
    });
    return (
        <>
          <button onClick={this.handleClick}>Make Picture</button>
          <button onClick={this.saveFile}>Save Picture</button>
          <input type="text" name="text" onChange={this.handleChange} value={this.text}></input>
          <select name="font" value={this.font} onChange={this.handleChange}>{listOfOptions}</select>
          <h1>{this.state.text}</h1>
          <h2 id="formatedText"><pre>{this.state.formatedText}</pre></h2>
        </>
    );
  }
}
