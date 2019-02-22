import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';



class App extends PureComponent {
  state = {
    count: 0,
    // hi: {
    //   text: 'you'
    // },
    text: 'hi there',
    // anotherText: '',
    formattedText: '',
    font: 'Bubble',
    img: ''
  };

  saveFile = () => {
    fileSaver.saveAs(this.state.img);
  };

  textToImage = event => {
    event.preventDefault();
    const image = document.getElementById('formattedText');
    domToImage.toPng(image)
      .then(img => {
        this.setState({ img });
      });
  };

  formatText = () => {
    const { font } = this.state;
    // const font = 'Ghost';
    figlet.text(this.state.text, 
      { font }, 
      (err, formattedText) => {
        if(err) return console.error(err);

        this.setState({ formattedText });
      });
  };

  handleClick = () => {
    const { count } = this.state;
    // const { count, hi } = this.state;
    // const updatedHi = { ...hi, text: 'there' };
    //this.setState({ count: count + 1, hi: updatedHi })
    this.setState({ count: count + 1 }, () => {
      console.log('Click', this.state.count);// .setState is asynchronous
    }); //this changes the key hi to value you with .setState takes in an object
  };
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();

    });
  };

  // <input type="text" name="anotherText" value={anotherText} onChange={this.handleChange} />
  // <h2>{anotherText}</h2>
  render() {
    const { text, formattedText, font, img } = this.state;

    const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Bear'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });
    return (
      <>
      <form onsumbit={this.textToImage}>
        <select name="font" onChange={this.handleChange} value={font}>
          {fontOptions}
        </select>
        <input type="text" name="text" value={this.state.text} onChange={this.handleChange} /> 
        <button type="submit">CreateImage</button>
      </form>
      <h1>{text}</h1>
      <h2 id="formattedText"><pre>{formattedText}</pre></h2>
      {img && <img src={img} />}
      {img && <button onClick={this.saveFile}>Save File</button>}
      <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}


export default App;

