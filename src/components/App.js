/*eslint-disable no-console*/
import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';
import styles from '../css/App.css';
import figlet from 'figlet';
import domToImage from 'dom-to-image';

//class components are used when we need to store state

export default class App extends PureComponent {

  state = {
    clicks: 0,
    text: '',
    formattedText: '',
    font: 'Twisted',
    img: ''
  }

  textToImage = (event) => {
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
    const fontOptions = ['Alligator', 'Basic', 'Twisted'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });

    return (
      <Fragment>
        <form onSubmit={this.textToImage}>
          <label>
          Type Your Text:
            <input type='text' name='text' value={this.state.text} onChange={this.handleChange}></input>
          </label>
        
          <select name='font' value={this.state.font} onChange={this.handleChange}>
            {fontOptions}
          </select>

          <button onClick={this.handleClick}>
          Create Image
          </button>

          <h2 className={styles.text}>
            {this.state.text}
          </h2>

          <h2 id="formattedText" className={styles.formattedText}>
            <pre>
              {this.state.formattedText}
            </pre>
          </h2>

          {this.state.img && <img src={this.state.img}/>}
        </form>
        

      </Fragment>
    );
  }
}

