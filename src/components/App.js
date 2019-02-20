/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import FigletApp from './FigletApp';
// import MemeDisplay from './MemeDisplay';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
// import ImageUpload from './ImageUpload';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import MemeApp from './MemeApp';

export default class App extends PureComponent {
  state = {
    headerText: '',
    footerText: '',
    imageUrl: '',
    meme: '',
    fontColor: 'purple',
    fontFamily: 'Courier',
    fontSize: '45px'
  }

  saveFile = () => {
    saveAs(this.state.meme);
  }

  memeToImage = (event) => {
    event.preventDefault();
    const createdMeme = document.getElementById('meme-id');
    domtoimage.toPng(createdMeme)
      .then(meme => {
        this.setState({ meme });
      });
  }

  handleUpload = ({ target }) => {
    const successMsg = document.getElementById('success-msg');
    this.setState({ imageUrl: window.URL.createObjectURL(target.files[0]) }, () => {
      successMsg.textContent = 'Success!';
      setTimeout(() => {
        successMsg.textContent = '';
      }, 3000);
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const title = 'Cari\'s Meme & Font Generator App';
    const name = '© Cari Palazzolo 2019';
    const { headerText, footerText, imageUrl, meme, fontColor, fontFamily, fontSize } = this.state;
    return (
      < >
        <Header title={title}/>
        <FigletApp />
        <MemeApp memeToImage={this.memeToImage}
          handleUpload={this.handleUpload}
          headerText={headerText}
          imageUrl={imageUrl}
          footerText={footerText}
          handleChange={this.handleChange}
          fontColor={fontColor}
          fontFamily={fontFamily}
          fontSize={fontSize}
        />
        {/* // <h1>Meme Generator!</h1> */}
        {/* // <ImageUpload */}
        {/* //   memeToImage={this.memeToImage} */}
        {/* //   handleUpload={this.handleUpload} */}
        {/* // /> */}
        {/* // <MemeDisplay */}
        {/* //   headerText={headerText}
        //   imageUrl={imageUrl}
        //   footerText={footerText}
        //   handleChange={this.handleChange}
        //   memeToImage={this.memeToImage}
        //   saveFile={this.saveFile}
        //   fontColor={fontColor}
        //   fontFamily={fontFamily}
        //   fontSize={fontSize}
        // /> */}
        {meme && <button onClick={this.saveFile}>Save file</button>}
        {meme && <img src={meme}/>}
        <Footer name={name} />
      </>
    );
  }
}
