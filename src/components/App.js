import React, { PureComponent }from 'react';
import domToImage from 'dom-to-image';
import FileSaver from './FileSaver';

class App extends PureComponent {
  constructor(props) {
    super(props);
  
    this.formattedTextRef = React.createRef();
  }

  state = {
    text: '',
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

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value },() => {
  });
};

// uploadFile = ({ target }) => {
//   const imgUpload = URL.createObjectURL(target.files[0]);
//   console.log(imgUpload);
//   this.setState({ imgUpload });
// };
  
render() {  
    const { text, formattedText, img } = this.state;
    return (
      <>
      <form onSubmit= {this.textToImage}>
      {/* <input type="file" onChange={this.uploadFile} />
      <img src={this.state.imgUpload} /> */}
      <input type="text" name="text" value={text} onChange={this.handleChange} />
      <h1>{text}</h1>
      <input type="text" name="img" value={img} onChange={this.handleChange} />
      </form>
      <div>
      <h2 ref={this.formattedTextRef}><pre>{formattedText}</pre></h2>
      {img && <img src={text} />}
      {img && <FileSaver img={img} />}
      <button onClick={this.handleClick}>Save</button>
      </div>
      </>
    )
  }
}
export default App;