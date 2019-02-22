import React, { Fragment, PureComponent } from 'react';
import '../css/App.css';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import MemeForm from './MemeForm';
import ImageFormatter from './ImageFormatter';
import 'normalize-css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
  }

  state = {
    header: '', 
    footer: '',
    imageUrl: '',
    headerColor: '',
    footerColor: '',
    headerFont: 'Tahoma',
    footerFont: 'Tahoma',
    meme: ''
  }

  toImage = event  => {
    event.preventDefault();
    const meme = this.memeRef.current;
    domToImage.toPng(meme)
      .then(meme => {
        fileSaver.saveAs(meme);
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { 
      header, 
      footer, 
      imageUrl, 
      footerColor, 
      headerColor, 
      headerFont, 
      footerFont 
    } = this.state;
    return (
      <Fragment>
        <h1>Meme Generator</h1>
        <MemeForm 
          toImage={this.toImage} 
          handleChange={this.handleChange}
          header={header}
          footer={footer}
          imageUrl={imageUrl}
          headerColor={headerColor}
          footerColor={footerColor}
          headerFont={headerFont}
          footerFont={footerFont}
        />
        <ImageFormatter 
          memeRef={this.memeRef}
          header={header}
          footer={footer}
          imageUrl={imageUrl}
          headerColor={headerColor}
          footerColor={footerColor}
          headerFont={headerFont}
          footerFont={footerFont}
        />
      </Fragment>
    );
  }
}

