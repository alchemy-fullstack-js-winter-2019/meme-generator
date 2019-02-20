import React, { Fragment, PureComponent } from 'react';
import styles from '../css/App.css';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import MemeForm from './MemeForm';
import 'normalize-css';

export default class App extends PureComponent {
  state = {
    header: '', 
    footer: '',
    imageUrl: '',
    meme: ''
  }

  toImage = event  => {
    event.preventDefault();
    const image = document.getElementById('meme');
    domToImage.toPng(image)
      .then(meme => {
        fileSaver.saveAs(meme);
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { header, footer, imageUrl } = this.state;
    return (
      <Fragment>
        <MemeForm 
          toImage={this.toImage} 
          handleChange={this.handleChange}
          header={header}
          footer={footer}
          imageUrl={imageUrl}/>
        <div className={styles.meme} id="meme">
          <p className={styles.header}>{this.state.header}</p>
          <img src={this.state.imageUrl} className={styles.img}/>
          <p className={styles.footer}>{this.state.footer}</p>
        </div>
      </Fragment>
      
    );
  }
}

