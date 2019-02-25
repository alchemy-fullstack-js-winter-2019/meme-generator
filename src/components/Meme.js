import React, { Component } from 'react';
import PropTypes from 'prop-types';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import DisplayMeme from './DisplayMeme';
import Controls from './Controls';


export default class MemeApp extends Component {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
  }
  
  state = {
    header: '',
    headerColor: '',
    footer: '',
    footerColor: '',
    imgUrl: '',
    
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  generateMeme = event => {
    console.log('this.memeRef', this.memeRef.current);
    event.preventDefault();
    domToImage.toPng(this.memeRef.current)
      .then(img => {
        fileSaver.saveAs(img);
      });
  }

  render() {
    const { 
      header, 
      footer, 
      imgUrl, 
      headerColor, 
      footerColor } = this.state;
    return (
      <>
      <h1>
        MEME GENERATOR
      </h1>
        <Controls 
          header={header} 
          footer={footer} 
          imgUrl={imgUrl} 
          onChange={this.handleChange} 
          onSubmit={this.generateMeme}
          headerColor={headerColor}
          footerColor={footerColor}
        />
        <DisplayMeme 
          memeRef={this.memeRef}
          header={header} 
          headerColor={headerColor}
          footer={footer} 
          footerColor={footerColor}
          imgUrl={imgUrl}
        />
      </>
    );
  }
}
