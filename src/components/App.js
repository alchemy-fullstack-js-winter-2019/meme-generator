import React, { Fragment, PureComponent } from 'react';
import styles from '../css/App.css';
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

  toImage = event  => {
    event.preventDefault();
    const image = document.getElementById('meme');
    domToImage.toPng(image)
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
      <Fragment>
        <h1>Meme Generator</h1>
        <form onSubmit={this.toImage}>
          <label>
            <span>Header:</span>
            <input type='text' name='header' value={header} onChange={this.handleChange}></input>
          </label>

          <label>
            <span>Footer:</span>
            <input type='text' name='footer' value={footer} onChange={this.handleChange}></input>
          </label>

          <label>
            <span>Image Url:</span>
            <input type='text' name='imageUrl' value={imageUrl} onChange={this.handleChange}></input>
          </label>

          <button type="submit">
          Save Meme
          </button>
        </form>

        <div className={styles.meme} id="meme">
          <p className={styles.header}>{this.state.header}</p>
          <img src={this.state.imageUrl} className={styles.img}/>
          <p className={styles.footer}>{this.state.footer}</p>
        </div>
      </Fragment>
    );
  }
}

