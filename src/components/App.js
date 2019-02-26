import React, { PureComponent } from 'react';
import domToImage from 'dom-to-image';
import FileSaver from './FileSaver';


export default class App extends PureComponent {
  
  state = {
    header: '', 
    footer: '', 
    img: 'https://www.castlighthealth.com/wp-content/uploads/2018/03/HealthyFood.jpg'
  };

  fileSave = () => {
    FileSaver.saveAs(this.state.img);
  }

  // toImage = event => {
  //   event.preventDefault();
  //   const meme = document.getElementById('meme');
  //   domToImage.toPng(meme)
  //     .then(img => {
  //       this.setState({ img });
  //     });
  // };

  toImage = event => {
    event.preventDefault();
    const node = document.getElementById('meme');
    domToImg.toPng(node)
      .then(img => this.setState({ img }, () => {
        fileSaver.saveAs(this.state.img);
      }));

   }

  

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { header, footer, img } = this.state;

    return (
      <>
        <p>Header: <input name="header" type="text" value={header} onChange={this.handleChange}/></p>
        <p>Image URL: <input name="img" type="text" value={img} onChange={this.handleChange}/></p>
        <p>Footer: <input name="footer" type="text" value={footer} onChange={this.handleChange}/></p>
        <div id="meme">
          <h2><pre>{header}</pre></h2>
          <img src={img} />
          <h2>{footer}</h2>
        </div>
        <button onClick={this.toImage}>Save Image</button>
      </>
    );
  }
}