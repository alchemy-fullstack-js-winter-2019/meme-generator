import React, { Component }from 'react';
import domToImage from 'dom-to-image';
import Controls from './Controls';
import DisplayMeme from './DisplayMeme';
import fileSaver from 'file-saver';

class App extends Component {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
    }

  state = {
    header: '',
    headerColor: '',
    headerFont: 'arial',
    footer: '',
    footerColor: '',
    footerFont: 'arial',
    imgUrl: ''
  };

generateMeme = () => {
  console.log('trying to generate meme');
};

textToImage = event => {
  event.preventDefault();
  domToImage.toPng(this.memeRef.current)
  .then(imgUrl => {
    fileSaver.saveAs({ imgUrl });
  });
};

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value },() => {
  });
};

render() {  
    const { header, headerColor, headerFont, footer, footerColor, footerFont, imgUrl } = this.state;
    return (
      <>
      <h1>Meme generator</h1>
      <Controls 
      header={header}
      footer={footer}
      imgUrl={imgUrl}
      onChange={this.handleChange}
      onSubmit={this.generateMeme}
      headerColor={headerColor}
      footerColor={footerColor}
      />
      <DisplayMeme 
      memeRef={this.memeRef}
      header={header}
      headerColor={header}
      //headerFont
      footer={footer}
      footerControl={footerControl}
      //footerFont
      imgUrl={imgUrl}
      />
      <h2 ref={this.formattedTextRef}><pre>{formattedText}</pre></h2>
      </>
    )
  }
}

export default App;