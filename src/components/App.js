import React, { Component } from 'react';
import Form from './Form';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import Display from './Display';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef(); 
  }
  state = {
    header: '',
    footer: '',
    imgUrl: '',
    headerColor: 'cambria',
    footerColor: '',
    headerFont: '',
    footerFont: 'cambria',
  }

  Meme = async(event) => {
    event.preventDefault();
    const img = await domToImage.toPng(this.memeRef.current);
    fileSaver.saveAs(img); 
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { header, footer, imgUrl, headerColor, footerColor, headerFont, footerFont } = this.state;
    return (
      <>
        <h1>Meme Generator</h1>
        <Form
          header={header}
          footer={footer}
          imgUrl={imgUrl}
          headerColor={headerColor}
          headerFont={headerFont}
          footerColor={footerColor}
          footerFont={footerFont}
          onChange={this.handleChange}
          onSubmit={this.Meme}
        />
        <Display
          memeRef={this.memeRef}
          header={header}
          footer={footer}
          imgUrl={imgUrl}
          headerColor={headerColor}
          headerFont={headerFont}
          footerColor={footerColor}
          footerFont={footerFont}
        />
      </>
    );
  }
}
