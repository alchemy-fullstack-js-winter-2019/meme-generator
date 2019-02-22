import React, { PureComponent } from 'react';
import UserInput from './children/UserInput';
import DankMemeDisplay from './children/DankMemeDisplay';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
  }
  state = {
    topText: '',
    bottomText: '',
    url: '',
    color: '',
    img: ''
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  memeToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.memeRef.current)
      .then(img => {
        this.setState({ img });
      });
  };
  saveFile = () => {
    fileSaver.saveAs(this.state.img);
  }
  render() {
    const { topText, bottomText, url, color, img } = this.state;
    return (
        <>
          <h1>Meme Maker</h1>
          <button onClick={this.saveFile}>Download Meme</button>
          <button onClick={this.memeToImage}>Create Meme</button>
          <UserInput 
            topText={topText} 
            bottomText={bottomText} 
            url={url} 
            color={color} 
            handleChange={this.handleChange}
          />
          <DankMemeDisplay
            topText={topText} 
            bottomText={bottomText} 
            url={url} 
            color={color}
            memeRef={this.memeRef}
          />
          {img && <img src={img}/>}
        </>
    );
  }
}
