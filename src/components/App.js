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
    headerColor: '',
    footer: '',
    footerColor: '',
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
    const { header, headerColor, footer, footerColor, url } = this.state;
    return (
      <Fragment>
        <div className={styles.meme}>
          <h1>mEmE GeNeRaToR</h1>
          
          <MemeForm 
            header={header}
            headerColor={headerColor}
            footer={footer}
            footerColor={footerColor}
            url={url}
            handleChange={this.handleChange}/>
          <button onClick={this.createAndSaveMeme}>Save Meme</button>
        
          <Meme 
            memeRef={this.finalMeme}
            header={header}
            headerColor={headerColor}
            footer={footer}
            footerColor={footerColor}
            url={url} />

        </div>
      </Fragment>
    );
  }
}

export default App;
