import React, { PureComponent } from 'react';
import fileSaver from 'file-saver';
import domToImage from 'dom-to-image';
import MemeForm from './MemeForm';
import MemeDisplay from './MemeDisplay';
import 'normalize.css';
import './App.css';

export default class App extends PureComponent {
  
  state = {
    header: 'I LUV REAL FOODS', 
    headerColor: '',
    headerFont: '',
    footer: 'NO ADDED INGREDIENTS',
    footerColor: '', 
    footerFont: '',
    // img: ''
    img: 'https://www.castlighthealth.com/wp-content/uploads/2018/03/HealthyFood.jpg'
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
    const { header, headerColor, headerFont, footer, footerColor, footerFont, img } = this.state;

    return (
      <>
        <MemeForm 
          header={header}
          headerColor={headerColor}
          headerFont={headerFont}
          img={img}
          footer={footer}
          footerColor={footerColor}
          footerFont={footerFont}
          handleChange={this.handleChange}
          saveImage={this.saveImage}
        />
        <div id="meme">
          <MemeDisplay
            header={header}
            headerColor={headerColor}
            headerFont={headerFont}
            img={img}
            footer={footer}
            footerColor={footerColor}
            footerFont={footerFont}
          />  
        </div>
      </>
    );
  }
}