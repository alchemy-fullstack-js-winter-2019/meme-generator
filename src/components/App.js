import React, { PureComponent } from 'react';
import fileSaver from 'file-saver';
import domToImg from 'dom-to-image';
import 'normalize.css';
import './App.css';

export default class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    img: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  saveImage = event => {
    event.preventDefault();
    const node = document.getElementById('meme');
    domToImg.toPng(node)
      .then(img => this.setState({ img }, () => {
        fileSaver.saveAs(this.state.img);
      }));

  }

  render() {
    const { header, footer, img } = this.state;

    return (
      <>
        <p>Image URL: <input name="img" type="text" value={img} onChange={this.handleChange}/></p>
        <p>Header: <input name="header" type="text" value={header} onChange={this.handleChange}/></p>
        <p>Footer: <input name="footer" type="text" value={footer} onChange={this.handleChange}/></p>
        <div id="meme">
          <h2>{header}</h2>
          <img src={img} />
          <h2>{footer}</h2>
        </div>
        <button onClick={this.saveImage}>Save Image</button>
      </>
    );
  }
}
