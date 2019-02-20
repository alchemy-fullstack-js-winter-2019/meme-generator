import React, { Fragment, PureComponent } from 'react';
// import styles from '../css/App.css';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import 'normalize-css';

export default class App extends PureComponent {
  state = {
    header: '', 
    footer: '',
    imageUrl: '',
    meme: ''
  }

  saveFile = () => {
    fileSaver.saveAs(this.state.meme);
  }

  toImage = event  => {
    event.preventDefault();
    const image = document.getElementById('meme');
    domToImage.toPng(image)
      .then(meme => {
        this.setState({ meme });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { header, footer, imageUrl } = this.state;
    return (
      <Fragment>
        <h1>Meme Generator</h1>
        <form onSubmit={this.toImage}>
          <label>
            Header:
            <input type='text' name='header' value={header} onChange={this.handleChange}></input>
          </label>

          <label>
            Footer:
            <input type='text' name='footer' value={footer} onChange={this.handleChange}></input>
          </label>

          <label>
            Image Url:
            <input type='text' name='imageUrl' value={imageUrl} onChange={this.handleChange}></input>
          </label>

          <button type="submit">
            Create Image
          </button>
        </form>

        {this.state.meme && <img src={this.state.meme}/>}

        <button onClick={this.saveFile}>
            Save Meme
        </button>
        <div id="meme">
          <img src={this.state.imageUrl}/>
          <p>{this.state.header}</p>
          <p>{this.state.footer}</p>

        </div>

      </Fragment>
    );
  }
}

