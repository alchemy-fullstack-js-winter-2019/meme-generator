import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

class MyClass extends PureComponent {
  state = {
    header: '',
    footer: '',
    imgURL: '',
    img: ''
  }

  fileSave = () => {
    fileSaver.saveAs(this.state.img);
  }

  textToImage = event => {
    const toImage = document.getElementById('textToSave');
    domToImage.toPng(toImage)
      .then(img => {
        this.setState({ img });
      });
    event.preventDefault();
  }

  updateInput = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      console.log(target.value);
    });
  }

  render() {
    const { text, secondText, img, imgURL } = this.state;

    return (
      <div>
        <h1>Meme Generator</h1>
        <form onSubmit={this.textToImage}>
          <input type='text' name='header' value={text} onChange={this.updateInput} />
          <input type='text' name='footer' value={secondText} onChange={this.updateInput} />
          <input type='text' name='imgURL' value={imgURL} onChange={this.updateInput} />
          <button type='submit'>Save as Image</button>
        </form>
        <h1>{text}</h1>
        {img && <button onClick={this.fileSave}>Save File</button>}
        {img && <img src={imgURL} />}
      </div>
    );
  }
}

export default MyClass;
