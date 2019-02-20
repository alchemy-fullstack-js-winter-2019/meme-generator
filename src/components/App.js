import React, { PureComponent, Fragment } from 'react';
import styles from '../css/App.css';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import MemeForm from './MemeForm.js';
// import Meme from './MemeForm.js';

class App extends PureComponent {
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
            header={this.header}
            footer={this.footer}
            url={this.url}
            handleChange={this.handleChange}/>
        
          <div ref={this.finalMeme} className={styles.final}>
            {header &&  <p>{header}</p>}
            <img src={url} />
            {footer && <p>{footer}</p>}
          </div>

          {url && header && <button onClick={this.createAndSaveMeme}>Save Meme</button>}

          {/* <Meme 
            ref={this.finalMeme}
            header={this.header}
            footer={this.footer}
            url={this.url}
            createAndSaveMeme={this.createAndSaveMeme}/> */}
        </div>
      </Fragment>
    );
  }
}

export default App;
