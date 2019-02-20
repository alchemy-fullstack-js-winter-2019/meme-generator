import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import 'normalize.css';
import styles from '../components/App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.memeTextRef = React.createRef();
    this.fileInput = React.createRef();
  }

  state = {
    headerText: '',
    footerText: '',
    imgUpload: '',
    imgUrl: '',
    meme: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  divToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.memeTextRef.current)
      .then(meme => {
        this.setState({ meme });
      });
  }

  saveMeme = () => {
    fileSaver.saveAs(this.state.meme);
  }

  handleFileUpload = event => {
    event.preventDefault();
    alert(`file uploaded: ${this.fileInput.current.files[0].name}`);
  }

  render() {
    const { headerText, footerText, imgUrl, imgUpload } = this.state;
    return (
      <>
      <h1>Meme Generatoooor</h1>
      <form className={styles.form} onSubmit={this.divToImage}>

        <label> Add Header Text
          <input onChange={this.handleChange} type="text" name="headerText" value={headerText}></input>
        </label>

        <label> Add Footer Text
          <input onChange={this.handleChange} type="text" name="footerText" value={footerText}></input>
        </label>

        <label> Import An Image From The Internets
          <input onChange={this.handleChange} type="text" name="imgUrl" value={imgUrl}></input>
        </label>

        <h2>OR</h2>

        <label> Upload An Image From Your Computer
          <input onChange={this.handleChange} type="file" name="imgUpload" ref={this.fileInput} value={imgUpload}></input>
          <button type="submit" onClick={this.handleFileUpload} value={imgUpload}>Upload Image</button>
        </label>
        
        <button type="submit" onClick={this.saveMeme}>Save My Meme!</button>
      </form>
     
      <div className={styles.memePreview}>
        <h3 className={styles.header} ref={this.memeTextRef}>{headerText}</h3>
        {imgUrl && <img src={imgUrl}></img>}
        <h3 className={styles.footer} ref={this.memeTextRef}>{footerText}</h3>
      </div>
      </>
    );
  }
}
