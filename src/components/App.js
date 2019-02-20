import React, { PureComponent, Fragment } from 'react';
import styles from '../css/App.css';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.finalMeme = React.createRef();
  }

  state = {
    header: '',
    footer: '',
    url: '',
    img: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  memeToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.finalMeme.current)
      .then(img => {
        console.log(img);
        this.setState({ img });
      });
  }

  saveMeme = event => {
    this.memeToImage(event);
    fileSaver.saveAs(this.state.img);
  }

  render() {
    const { header, footer, url } = this.state;
    return (
      <Fragment>
        <div className={styles.meme}>
          <h1>mEmE GeNeRaToR</h1>
          <form>
            <label>
              Header:
              <input type="text" name="header" value={this.header} onChange={this.handleChange}></input>
            </label> 
            <label>
              Footer:
              <input type="text" name="footer" value={this.footer} onChange={this.handleChange}></input>
            </label>
            <label>
              Photo Url:
              <input type="url" name="url" value={this.url} onChange={this.handleChange}></input>
            </label>
          </form>
        </div>
        <div ref={this.finalMeme} className={styles.final}>
          {header &&  <p>{header}</p>}
          <img src={url} />
          {footer && <p>{footer}</p>}
          {url && header && <button onClick={this.saveMeme}>Save Meme</button>}
        </div>
      </Fragment>
    );
  }
}

export default App;
