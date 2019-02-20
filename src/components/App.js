import React, { PureComponent } from 'react';
import fileSaver from 'file-saver';
import domToImg from 'dom-to-image';
import 'normalize.css';
import styles from './App.css';
import Form from './Form';

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
        <div id="meme" className={styles.meme}>
          <h2 className={styles.header}>{header}</h2>
          {img && <img src={img} />}
          <h2 className={styles.footer}>{footer}</h2>
        </div>
      </>
    );
  }
}
