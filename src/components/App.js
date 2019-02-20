import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    imgUrl: '',
    meme: ''
  }

  toImage = event => {
    event.preventDefault();
    domToImage.toPng(this.image.current)
      .then(meme => {
        fileSaver.saveAs(meme); 
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { header, footer, imageUrl } = this.state;
    return (
      <>
        <select name="header" value={header}onChange={this.handleChange}></select>
        <input type="text" name="footer" value={footer} onChange={this.handleChange} />
        <input type="text" name="imageUrl" value={imageUrl} onChange={this.handleChange} />
        <h1>Meme Generator</h1>
        <button onClick={this.toImage}>Save Meme</button>
      </>
    );
  }
}
