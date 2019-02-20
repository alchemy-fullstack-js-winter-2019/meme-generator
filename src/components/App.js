import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';

class MyClass extends PureComponent {
  state = {
    header: '',
    footer: '',
    imgURL: '',
    img: ''
  }

  fileSave = (image) => {
    fileSaver.saveAs(image);
  }

  textToImage = event => {
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
    const { header, footer, img } = this.state;

    return (
      <div className={styles.container}>
        <h1>Meme Generator</h1>
        <form onSubmit={this.textToImage}>
          <input type='text' name='header' value={header} onChange={this.updateInput} />
          <input type='text' name='footer' value={footer} onChange={this.updateInput} />
          <input type='text' name='img' value={img} onChange={this.updateInput} />
          <button type='submit'>Save as Image</button>
        </form>
        {/* {img && <button onClick={this.fileSave}>Save File</button>} */}
        <div id='image' className={styles.meme}>
          <h1>{header}</h1>
          {img && <img src={img} />}
          <h2>{footer}</h2>
        </div>
      </div>
    );
  }
}

export default MyClass;
