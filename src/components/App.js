import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    imgUrl:''
  };

  saveFile = () => {
    fileSaver.savesAs(this.state.imgUrl);
  };

  image = event => {
    event.preventDefault();
    domToImage.toPng(this.formattedTextRef.current)
      .then(img => {
        this.setState({ img });
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
      <form onSubmit={this.image}>
        <input type="text" name="header" value={this.state.header} onChange={this.handleChange}/>
        <input type="text" name="footer" value={this.state.footer} onChange={this.handleChange} />
        <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} />
        <button type="submit">Submit Meme</button>
      </form>
      <div> 
        <h1>{header}</h1>
        {imgUrl && <img src={imgUrl}/>}
        <h2>{footer}</h2>

      </div>
      </>
    );
  }
}


export default App;
