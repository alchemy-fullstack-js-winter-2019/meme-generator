import React, { Component } from 'react';
import Controller from './Controller';
import DisplayOutput from './Display';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {
  memeRef = React.createRef();

  state = {
    header: '',
    headerColor: '#000000',
    headerFont: 'impact',
    footer: '',
    footerColor: '#000000',
    footerFont: 'impact',
    imageUrl: ''
  };
  generateMeme = async(event) => {
    event.preventDefault();
    const img = await domToImage.toPng(this.memeRef.current);
    fileSaver.saveAs(img);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { 
      header,
      headerColor,
      headerFont,
      footer, 
      footerColor,
      footerFont,
      imageUrl 
    } 
    = this.state;
    
    const fontOptions = ['impact', 'monospace', 'serif', 'fantasy'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });

    return (
      <>
      <h1>Whatever We Want Basically - a Meme Generator</h1>

        <Controller 
          header={header}
          footer={footer}
          imageUrl={imageUrl}
          headerColor={headerColor}
          headerFont={headerFont}
          footerColor={footerColor}
          footerFont={footerFont}
          fontOptions={fontOptions}
          onChange={this.handleChange}
          onSubmit={this.generateMeme}
        />

        <DisplayOutput 
          header={header}
          footer={footer}
          imageUrl={imageUrl}
          headerColor={headerColor}
          headerFont={headerFont}
          footerColor={footerColor}
          footerFont={footerFont}
          memeRef={this.memeRef}
        />
      </>
    );
  }
}
