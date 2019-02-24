import React, { Component } from 'react';
import domToImage from 'dom-to-image';
import DisplayMeme from '../components/DisplayMeme';
import fileSaver from 'file-saver';

class App extends Component { 
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
  }
  state = {
    header: '',
    footer: '',
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
    const { header, footer, imgUrl } = this.state;
    return (
      <>
      <h1>Generate Your Own Meme</h1>
      <form onSubmit={this.image}>
        <input type="text" name="header" value={this.state.header} onChange={this.handleChange}/>
        <input type="text" name="footer" value={this.state.footer} onChange={this.handleChange} />
        <input type="url" name="imgUrl" value={imgUrl} onChange={this.handleChange} />
        <button type="submit" name="image">Save Meme</button>
      </form>
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
