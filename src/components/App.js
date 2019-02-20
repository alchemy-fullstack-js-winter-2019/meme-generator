import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

class App extends PureComponent { //children can only be pureComponent
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
  }
  state = {
    header: '',
    //headerColor: '#000000,
    footer: '',
    imgUrl:''
  };

  // generateMeme = () => {
  //   event.preventDeafult();
  //   console.log('trying', this.memeRef.current);
  // };

  saveFile = () => {
    fileSaver.savesAs(this.state.imgUrl);
  };

  image = event => { //created an image and saved to computer
    event.preventDefault();
    //const img = await domToImage.toPng(this.memeRef.current)
    domToImage.toPng(this.memeRef.current)
      .then(img => {
        fileSaver.saveAs(img);
        // this.setState({ img });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
     
    });
  };

  render() {
    const { header, footer, imgUrl } = this.state;

   
    return (
      <>
      <h1>Generate Your Own Meme</h1>
      <form onSubmit={this.image}>
        <input type="text" name="header" value={this.state.header} onChange={this.handleChange}/>
        <input type="text" name="footer" value={this.state.footer} onChange={this.handleChange} />
        <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} />
        <button type="submit" name="image">Save Meme</button>
      </form>
      <div ref={this.memeRef}> 
        <h1>{header}</h1>
        {imgUrl && <img src={imgUrl}/>}
        <h2>{footer}</h2>
      </div>
      </>
    );
  }
}







export default App;
