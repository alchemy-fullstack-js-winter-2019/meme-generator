import React, { Component } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import 'normalize-css';
import Display from './Display';
import MemeForm from './MemeForm';
import styles from './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef(); 
  }
  state = {
    header: '',
    footer: '',
    imgUrl: '',
    headerColor: 'cambria',
    footerColor: '',
    headerFont: '',
    footerFont: 'cambria',
    meme: ''
  }

  makeMeme = async(event) => {
    event.preventDefault();
    const img = await domToImage.toPng(this.memeRef.current);
    fileSaver.saveAs(img); 
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { header, footer, imgUrl, headerColor, footerColor, headerFont, footerFont } = this.state;
    return (
      <>
        <div className={styles.meme}>
          <h1>Meme Generator</h1>
          <MemeForm
            header={header}
            footer={footer}
            imgUrl={imgUrl}
            headerColor={headerColor}
            headerFont={headerFont}
            footerColor={footerColor}
            footerFont={footerFont}
            onChange={this.handleChange}
            onSubmit={this.makeMeme} 
          />
          <Display
            memeRef={this.memeRef}
            header={header}
            footer={footer}
            imgUrl={imgUrl}
            headerColor={headerColor}
            footerColor={footerColor}
            headerFont={headerFont}
            footerFont={footerFont} />
        </div>
      </>
    );
  }
}
