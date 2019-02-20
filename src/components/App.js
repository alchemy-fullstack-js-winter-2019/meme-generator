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
    console.log('here');
    event.preventDefault();
    domToImage.toPng(this.memeTextRef.current)
      .then(meme => {
        console.log(meme);
        fileSaver.saveAs(meme);
      });
  }

  handleFileUpload = event => {
    event.preventDefault();
    alert(`file uploaded: ${this.fileInput.current.files[0].name}`);
  }

  render() {
    const { headerText, footerText, imgUrl, imgUpload } = this.state;
    return (
      <>
      <h1>Rainbow Meme Maker</h1>
      <form className={styles.form} onSubmit={this.divToImage}>

        <label> ADD SUM HEADER TEXT
          <input onChange={this.handleChange} type="text" name="headerText" value={headerText}></input>
        </label>

        <label> ADD SUM FOOTER TEXT
          <input onChange={this.handleChange} type="text" name="footerText" value={footerText}></input>
        </label>

        <label> IMPORT AN IMAGE FROM THE INTERNETS!
          <input onChange={this.handleChange} type="text" name="imgUrl" value={imgUrl}></input>
        </label>

        <h2>OR</h2>

        <label> UPLOAD FROM YOUR COMPUTERZ
          <input onChange={this.handleChange} type="file" name="imgUpload" ref={this.fileInput} value={imgUpload}></input>
        </label>
        
        <button type="submit">Save My Meme!</button>
      </form>
     
      <div ref={this.memeTextRef} className={styles.memePreview}>
        <h3 className={styles.header}>{headerText}</h3>
        {imgUrl && <img  src={imgUrl}></img>}
        <h3 className={styles.footer}>{footerText}</h3>
      </div>
      </>
    );
  }
}
