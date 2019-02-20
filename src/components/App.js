import React, { Component, Fragment } from 'react';
import styles from '../css/App.css';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import MemeForm from './MemeForm.js';
import Meme from './Meme.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.finalMeme = React.createRef();
  }

  state = {
    header: '',
    footer: '',
    url: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  createAndSaveMeme = event => {
    event.preventDefault();
    domToImage.toPng(this.finalMeme.current)
      .then(img => {
        fileSaver.saveAs(img);
      });
  }

  render() {
    const { header, footer, url } = this.state;
    return (
      <Fragment>
        <div className={styles.meme}>
          <h1>mEmE GeNeRaToR</h1>
          
          <MemeForm 
            header={header}
            footer={footer}
            url={url}
            handleChange={this.handleChange}/>
          <button onClick={this.createAndSaveMeme}>Save Meme</button>
        
          <Meme 
            memeRef={this.finalMeme}
            header={header}
            footer={footer}
            url={url} />

          {/* <div ref={this.finalMeme} className={styles.final}>
            {header &&  <p>{header}</p>}
            <img src={url} />
            {footer && <p>{footer}</p>}
          </div> */}


        </div>
      </Fragment>
    );
  }
}

export default App;
