import React, { PureComponent } from 'react';
import fileSaver from 'file-saver';
import domToImg from 'dom-to-image';
import Form from './Form';
import Meme from './Meme';
import 'normalize.css';
import './App.css';

export default class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    img: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  saveImage = event => {
    event.preventDefault();
    const node = document.getElementById('meme');
    domToImg.toPng(node)
      .then(img => this.setState({ img }, () => {
        fileSaver.saveAs(this.state.img);
      }));

  }

  render() {
    const { header, footer, img } = this.state;

    return (
      <>
        <Form
          img={img}
          header={header}
          footer={footer}
          handleChange={this.handleChange}
          saveImage={this.saveImage}
        />
        <div id="meme">
          <Meme
            img={img}
            header={header}
            footer={footer}
          />
        </div>
      </>
    );
  }
}
