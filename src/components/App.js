import React, { PureComponent }from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.formattedTextRef = React.createRef();
  }

  state = {
    count: 0,
    text: '',
    formattedText: '',
    font:'Ghost',
    img: ''
  };

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text, 
      { font },
      (err, formattedText) => {
      if(err) return console.error(err);
      this.setState({ formattedText });
    });
  };

  textToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.formattedTextRef.current)
    .then(img => {
      this.setState({ img });
    });
  };

  
handleClick = () => {
  const { count } = this.state;
  this.setState({ count: count + 1 }, () => {
    console.log(this.state.count, 'click/s');
  }); 
};
handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value }, () => {
    this.formatText();
  });
};

  render() {
    const { text, formattedText, font, img } = this.state;
    const fontOptions = ['Ghost', 'Georgia11', 'Basic'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });

    return (
      <>
      <form onSubmit={this.textToImage}>
        <select name="font" onChange={this.handleChange} value={font}>
        {fontOptions}
        </select>
        <input type="text" name="text" value={text} onChange={this.handleChange} />
        <button type="submit">Create Image</button>
      </form>
        <h1>Hello</h1>
        <h2 ref={this.formattedTextRef}><pre>{formattedText}</pre></h2>
        {img && <img src={img} />}
        <h2>{text}</h2>
        <button onClick={this.handleClick}>click</button>
      </>
    );
  }

}

export default App;