import React, { Component } from 'react';
import domToImage from 'dom-to-image';
import DisplayMeme from '../components/DisplayMeme';
import fileSaver from 'file-saver';
import ControlChange from '../components/ControlChange';

class App extends Component { 
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
  }
  state = {
    header: '',
    headerColor: '#4286f4',
    headerFont: 'fantasy', 
    footer: '',
    footerColor: '#4286f4',
    footerFont: 'fantasy',
    imgUrl:''
  };


  //creates an image and saves to computer
  image = async(event) => { 
    event.preventDefault();
    const img = await domToImage.toPng(this.memeRef.current);
    fileSaver.saveAs(img);
    //example of another way to write code
    // domToImage.toPng(this.memeRef.current)
    //   .then(img => {
    //     fileSaver.saveAs(img); //this.setState({ img });
    // });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { header, footer, imgUrl, headerColor, headerFont, footerColor, footerFont } = this.state;
    return (
      <>
      <h1>Generate Your Own Meme</h1>
      <ControlChange
        header={header}
        headerColor={headerColor}
        headerFont={headerFont}
        footer={footer}
        footerColor={footerColor}
        footerFont={footerFont}
        imgUrl={imgUrl}
        onChange={this.handleChange}
        onSubmit={this.image}
      />
      <DisplayMeme
        memeRef={this.memeRef}
        header={header}
        footer={footer}
        imgUrl={imgUrl}
      />
      </>
    );
  }
}

export default App;


// <form onSubmit={this.image}>
// Header: <input type="text" name="header" value={this.state.header} onChange={this.handleChange}/>
// Footer: <input type="text" name="footer" value={this.state.footer} onChange={this.handleChange} />
// Image Url: <input type="url" name="imgUrl" value={imgUrl} onChange={this.handleChange} />
// <button type="submit" name="image">Save Meme</button>
// </form>
