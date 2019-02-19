/*eslint-disable no-console*/
import React, { Fragment, PureComponent } from 'react';
import FileSaver from './FileSaver';
import FormatDisplay from './FormatDisplay';
import TextFormatter from './TextFormatter';
import styles from '../css/App.css';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import 'normalize-css';

//class components are used when we need to store state
export default class App extends PureComponent {

  state = {
    clicks: 0,
    text: '',
    formattedText: '',
    font: 'DOSRebel',
    img: ''
  }

  textToImage = event => {
    event.preventDefault();
    const image = document.getElementById('formattedText');
    domToImage.toPng(image)
      .then(img => {
        this.setState({ img });
      });
  };

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 }, () => {
      console.log(this.state.clicks);
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text, { font }, (err, formattedText) => {
      if(err) return console.error(err);
      this.setState({ formattedText });
    });
  }

  render() {
   
    return (
      <Fragment>
        
        <TextFormatter 
          text={this.state.text} 
          font={this.state.font} 
          handleChange={this.handleChange} 
          textToImage={this.textToImage}/>
        
        <h2 className={styles.text}>
          {this.state.text}
        </h2>

        <FormatDisplay formattedText={this.state.formattedText} />
        
        {this.state.img && <FileSaver img={this.state.img} saveFile={this.saveFile}/>}

      </Fragment>
    );
  }
}

