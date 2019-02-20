import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import 'normalize.css';
import styles from '../components/App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.memeTextRef = React.createRef();
  }

  state = {
    headerText: 'Add Header Text',
    footerText: 'Add Footer Text',
    imgUpload: '',
    imgUrl: 'https://static01.nyt.com/images/2017/09/12/us/12xp-monkey1/12xp-monkey1-articleInline.jpg?quality=75&auto=webp&disable=upscale',
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

  render() {
    const { headerText, footerText, imgUrl } = this.state;
    return (
      <>
      <h1>Meme Generatoooor</h1>
      <form className={styles.form} onSubmit={this.divToImage}>
        <input onChange={this.handleChange} type="text" name="headerText" value={headerText}></input>
        <input onChange={this.handleChange} type="text" name="footerText" value={footerText}></input>
        <input onChange={this.handleChange} type="text" name="imgUrl" value={imgUrl}></input>
        {/* <h2>OR</h2>
      <input onChange={this.handleChange} type="file" name="imgUpload" value={imgUpload}></input> */}
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
