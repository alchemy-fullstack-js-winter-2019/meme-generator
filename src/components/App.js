import React, { PureComponent } from 'react';
import fileSaver from 'file-saver';
import domToImage from 'dom-to-image';
import MemeForm from './MemeForm';

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
        <MemeForm 
          header={header}
          img={img}
          footer={footer}
          handleChange={this.handleChange}
          saveImage={this.saveImage}
        />

        <div id="meme">
          <h2><pre>{header}</pre></h2>
          {img && <img src={img} />}
          <h2>{footer}</h2>
        </div>
      </>
    );
  }
}