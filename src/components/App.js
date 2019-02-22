import React, { Component } from 'react';
import Controller from './Controller';
import DisplayOutput from './Display';

export default class App extends Component {

  state = {
    header: '',
    headerColor: '#000000',
    headerFont: 'monospace',
    footer: '',
    footerColor: '#000000',
    imageUrl: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { 
      header,
      headerColor,
      headerFont,
      footer, 
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
          headerFont={headerFont}
          footerColor={footerColor}
          onChange={this.handleChange}
        />
        <DisplayOutput 
          header={header}
          footer={footer}
          imageUrl={imageUrl}
          headerColor={headerColor}
          headerFont={headerFont}
          footerColor={footerColor}
        />
      </>
    );
  }
}
