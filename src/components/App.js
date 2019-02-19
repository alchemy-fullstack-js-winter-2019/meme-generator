import React, { PureComponent, Fragment } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';

class App extends PureComponent {
  // constructor(props) {
  //   super(props);

  // }

  state = {
    clickCount: 0,
    text: '',
    formattedText: '',
    font: 'Ghoulish',
    img: ''
  }

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text, {
      font }, (err, data) => {
      if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
      this.setState({ formattedText: data });
    }); 
  }

  textToImage = event => {
    event.preventDefault();
    const image = document.getElementById('formattedText');
    console.log(image);
    domToImage.toPng(image)
      .then(img => {
        this.setState({ img }); 
      });
  }

  handleClick = () => {
    this.setState({ clickCount: this.state.clickCount + 1 }, () => {
      console.log('clicked', this.state.clickCount, 'times');
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { text, formattedText, img } = this.state;

    const fontOptions = ['Stellar', 'Speed', 'Ghost', 'Ghoulish'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });
    return (
      <Fragment>
        <h1>Figlet Generator!</h1>
        <form className="form" onSubmit={this.textToImage}>
          <input type="text" name="text" value={text} onChange={this.handleChange}></input>
          <select name="font" onChange={this.handleChange}>
            {fontOptions}
          </select>
          <button>Submit</button>
        </form>
        <h2 id="formattedText"><pre>{formattedText}</pre></h2>
        <p>{text}</p>
        {img && <p><img src={img} /></p>}
      </Fragment>
    );
  }
}

export default App;
