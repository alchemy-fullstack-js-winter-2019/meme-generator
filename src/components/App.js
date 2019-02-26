import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';

class MyClass extends PureComponent {
  state = {
    header: '',
    footer: '',
    headerColor: '',
    footerColor: '',
    imgURL: '',
    img: ''
  }

  fileSave = (image) => {
    fileSaver.saveAs(image);
  }

  onSubmit = event => {
    const toImage = document.getElementById('image');
    domToImage.toPng(toImage)
      .then(img => {
        this.fileSave(img);
      });
    event.preventDefault();
    
  }

  updateInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { header, footer, img, headerColor, footerColor } = this.state;

    return (
      <div className={styles.container}>
        <h1>Meme Generator</h1>
        <div className={styles.form}>
          <form onSubmit={this.onSubmit}>
            <span>Top Text: </span>
            <input type='text' name='header' value={header} onChange={this.updateInput} />
            <span>Bottom Text: </span>
            <input type='text' name='footer' value={footer} onChange={this.updateInput} />
            <span>Top Color: </span>
            <input type='color' name='headerColor' value={headerColor} onChange={this.updateInput} />
            <span>Bottom Color: </span>
            <input type='color' name='footerColor' value={footerColor} onChange={this.updateInput} />
            <span>Image: </span>
            <input type='text' name='img' value={img} onChange={this.updateInput} />
            <button type='submit'>Save as Image</button>
          </form>
        </div>
        <div className={styles.wrapper}>
          <div id='image' className={styles.meme}>
            <h2 style={{ color: headerColor }}>{header}</h2>
            {img && <img src={img} />}
            <h3 style={{ color: footerColor }}>{footer}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MyClass;

