import React, { PureComponent } from 'react';
import HeaderDisplay from './HeaderDisplay';
import ImageForm from './ImageForm';
import styles from './css/App.css';


export default class App extends PureComponent {

  state = {
    text: '',
    img: '',
    footer: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
    });
  };
  render() {
    const { text, img, footer } = this.state;
    return (
      <>
      <HeaderDisplay className={styles} onChange={this.handleChange} />
      {img && <ImageForm text={text} className={styles} footer={footer} img={img}/>}
    </>
    );
  }
}
