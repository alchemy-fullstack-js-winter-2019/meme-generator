import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  state = {
    header: '',
    footer: '',
    imageUrl: ''
  };
  render() {
    const { header, footer, image } = this.state;
    return (
      <>
        <Header />
      </>
    );
  }
}
