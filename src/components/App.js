import React, { Fragment, PureComponent } from 'react';
import '../css/App.css';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import MemeForm from './MemeForm';
import ImageFormatter from './ImageFormatter';
import 'normalize-css';

export default class App extends PureComponent {
  state = {
    header: '', 
    footer: '',
    imageUrl: '',
    color: 'white',
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
    const { header, footer, imageUrl, color } = this.state;
    return (
      <Fragment>
        <h1>Meme Generator</h1>
        <MemeForm 
          toImage={this.toImage} 
          handleChange={this.handleChange}
          header={header}
          footer={footer}
          imageUrl={imageUrl}
          color={color}/>
        <ImageFormatter 
          header={header}
          footer={footer}
          imageUrl={imageUrl}/>
      </Fragment>
    );
  }
}

