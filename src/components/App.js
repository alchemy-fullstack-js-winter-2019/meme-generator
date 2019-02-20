import React, { PureComponent }from 'react';
import domToImage from 'dom-to-image';
// import FileSaver from './FileSaver';

class App extends PureComponent {
  constructor(props) {
    super(props);
  
    this.formattedTextRef = React.createRef();
  }

  state = {
    header: '',
    footer: '',
    formattedText: '',
    img: ''
  };

textToImage = event => {
  event.preventDefault();
  domToImage.toPng(this.formattedTextRef.current)
  .then(img => {
    this.setState({ img });
  });
};

saveFile = ({ img }) => {
  fileSaver.saveAs({ img });
};

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value },() => {
  });
};
  
render() {  
    const { header, footer, formattedText, img } = this.state;
    return (
      <>
      <h1>Meme generator</h1>
      <form onSubmit= {this.textToImage}>
      <div>
      <label>Header</label>
      <input type="text" name="header" value={header} onChange={this.handleChange} />
      </div>
      <div>
      <label>URL</label>
      <input type="text" name="img" value={img} onChange={this.handleChange} />
      </div>
      <div>
      <label>Footer</label>
      <input type="text" name="footer" value={footer} onChange={this.handleChange} />
      </div>
      </form>
      <h1>{header}</h1>
      <h2 ref={this.formattedTextRef}><pre>{formattedText}</pre></h2>
      {img && <img src={img} />}
      {img && <button onClick={this.saveFile}>Save File</button>}
      <h2>{footer}</h2>
      </>
    )
  }
}
export default App;