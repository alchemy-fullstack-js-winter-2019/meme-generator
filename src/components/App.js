import React, { PureComponent } from 'react';
import fileSaver from 'file-saver';
import domToImg from 'dom-to-image';
import 'normalize.css';
import styles from './App.css';

export default class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    img: ''
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
        <div id="meme" className={styles.meme}>
          <h2 className={styles.header}>{header}</h2>
          {img && <img src={img} />}
          <h2 className={styles.footer}>{footer}</h2>
        </div>
        <button onClick={this.saveImage}>Save Image</button>
      </>
    );
  }
}
