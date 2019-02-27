import React, { PureComponent } from 'react';
import fileSaver from 'file-saver';
import domToImage from 'dom-to-image';

export default class App extends PureComponent {
  
  state = {
    header: '', 
    footer: '', 
    img: ''
    // img: 'https://www.castlighthealth.com/wp-content/uploads/2018/03/HealthyFood.jpg'
  };

   saveImage = event => {
    event.preventDefault();
    const meme = document.getElementById('meme');
    domToImage.toPng(meme)
      .then(img => {
        fileSaver.saveAs(img);
      });
   }  

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { header, footer, img } = this.state;

    return (
      <>
        <h1>Meme Generator</h1>
        <span>  Header: <input name="header" type="text" value={header} onChange={this.handleChange}/></span>
        <span>  Image URL: <input name="img" type="text" value={img} onChange={this.handleChange}/></span>
        <span>  Footer: <input name="footer" type="text" value={footer} onChange={this.handleChange}/></span>
        <div id="meme">
          <h2><pre>{header}</pre></h2>
          {img && <img src={img} />}
          <h2>{footer}</h2>
        </div>
        {img &&<button onClick={this.saveImage}>Save Image</button>}
      </>
    );
  }
}