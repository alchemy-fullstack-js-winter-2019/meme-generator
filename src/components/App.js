import React, { Component } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import 'normalize.css';
import styles from '../components/App.css';
// import PropTypes from 'prop-types';
import Form from './Form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.memeTextRef = React.createRef();
  }

  state = {
    headerText: '',
    footerText: '',
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
        fileSaver.saveAs(meme);
      });
  }

  render() {
    const { headerText, footerText, imgUrl } = this.state;
    return (
      <>
      <h1>Rainbow Meme Maker</h1>
      <Form 
        onSubmit={this.divToImage}
        onChange={this.handleChange}
        imgUrl={imgUrl}
        headerText={headerText}
        footerText={footerText}
      />
     
      <div ref={this.memeTextRef} className={styles.memePreview}>
        <h3 className={styles.header}>{headerText}</h3>
        {imgUrl && <img  src={imgUrl}></img>}
        <h3 className={styles.footer}>{footerText}</h3>
      </div>
      </>
    );
  }
}


