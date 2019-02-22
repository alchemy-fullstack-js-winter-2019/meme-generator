import React, { Component } from 'react';
import Controller from './Controller';
import DisplayOutput from './Display';

export default class App extends Component {

  state = {
    header: '',
    footer: '',
    headerColor: '#000000',
    footerColor: '#000000',
    imageUrl: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { 
      header,
      footer, 
      headerColor,
      footerColor,
      imageUrl 
    } 
      = this.state;

    return (
      <>
      <h1>Whatever We Want Basically - a Meme Generator</h1>

        <Controller 
          header={header}
          footer={footer}
          imageUrl={imageUrl}
          headerColor={headerColor}
          footerColor={footerColor}
          onChange={this.handleChange}
        />
        <DisplayOutput 
          header={header}
          footer={footer}
          imageUrl={imageUrl}
          headerColor={headerColor}
          footerColor={footerColor}
        />
      </>
    );
  }
}
