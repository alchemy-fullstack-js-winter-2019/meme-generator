import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
// import fileSaver from 'file-saver';
import TextFormatter from './TextFormatter';
import FormatDisplay from './FormatDisplay';
import FileSaver from './FileSaver';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.formattedTextRef = React.createRef();
  }
  //can update and change over time
  state = {
    count: 0,
    text: '',
    formattedText: '',
    font: 'Ghost',
    img: ''
  }
  //property class
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log('clicked');
  }

  handleChange = ({ target }) => {
    //target.name refers to name in input can have multiple 
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    }); 
  }

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text, 
      { font },
      (err, formattedText) => {
        if(err) return console.log(err);
        this.setState({ formattedText });
      });
  };

  textToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.formattedTextRef.current)
      .then(img => {
        this.setState({ img });
      });
  }

  render() {
    const { text, formattedText, font, img  } = this.state;
    return (
      <>  
        <TextFormatter 
          text={text}
          font={font}
          onChange={this.handleChange}
          onSubmit={this.textToImage}
        />
        <FormatDisplay 
          formattedText={formattedText}
          formattedTextRef={this.formattedTextRef}
        />
        {img && <FileSaver img={img} />}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
