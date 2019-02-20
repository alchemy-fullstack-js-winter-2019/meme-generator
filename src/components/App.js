import React, { PureComponent }from 'react';
import Header from './Header';
import domToImage from 'dom-to-image';
// import FileSaver from './FileSaver';

class App extends PureComponent {
  constructor(props) {
    super(props);
  
    this.formattedTextRef = React.createRef();
  }

  state = {
    text:'',
    formattedText: '',
    img: ''
  };

textToImage = event => {
  event.preventDefault();
  domToImage.toPng(this.formattedTextRef  .current)
  .then(img => {
    this.setState({ img });
  });
};

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value },() => {
  });
};
  
render() {  
    const { text, formattedText, img } = this.state;
    return (
      <>
      <form onSubmit= {this.textToImage}>
      <Header />
      <input type="text" name="text" value={text} onChange={this.handleChange} />
      <button onClick={this.handleClick}>Save Url</button>
      <input type="text" name="img" value={img} onChange={this.handleChange} />
      <button onClick={this.handleClick}>Save Url</button>
      </form>
      <h2 ref={this.formattedTextRef}><pre>{formattedText}</pre></h2>
      {/* {img && <img src={img} />} */}
      </>
    )
  }
}
export default App;