import React, { Component } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import 'normalize.css';
import Form from './Form';
import NewMeme from './NewMeme';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
  }

  state = {
    headerText: '',
    footerText: '',
    imgUrl: '',
    headerColor: '#00fdff',
    footerColor: '#ff9300',
    headerFont: 'monospace',
    footerFont: 'monospace'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  divToImage = async(event) => {
    event.preventDefault();
    const meme = await domToImage.toPng(this.memeRef.current);

    fileSaver.saveAs(meme);
    
  }

  render() {
    const { headerText, footerText, imgUrl, headerColor, footerColor, headerFont, footerFont } = this.state;
    return (
      <>
      <h1>Rainbow Meme Maker</h1>
      <Form 
        onSubmit={this.divToImage}
        onChange={this.handleChange}
        imgUrl={imgUrl}
        headerColor={headerColor}
        headerText={headerText}
        footerColor={footerColor}
        footerText={footerText}
        headerFont={headerFont}
        footerFont={footerFont}
      />
     
      <NewMeme 
        memeRef={this.memeRef}
        imgUrl={imgUrl}
        headerText={headerText}
        headerColor={headerColor}
        footerText={footerText}
        footerColor={footerColor}
        headerFont={headerFont}
        footerFont={footerFont}
      />
      </>
    );
  }
}


