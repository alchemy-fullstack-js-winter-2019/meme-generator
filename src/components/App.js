import React, { Component } from 'react';
import Controller from './Controller';
import DisplayOutput from './Display';

export default class App extends Component {
  
  state = {
    header: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { 
      header,
      // headerColor,
      // headerFont, 
      // footer,
      // footerColor,
      // footerFont, 
      // imageUrl 
    } 
      = this.state;
    return (
      <>
      <h1>Whatever We Want Basically - a Meme Generator</h1>

        <Controller 
          header={header}
          // headerColor={headerColor}
          // headerFont={headerFont} 
          // footer={footer}
          // footerColor={footerColor}
          // footerFont={footerFont} 
          // imageUrl={imageUrl}
          onChange={this.handleChange}
          // onSubmit={this.generateMeme}
        />
        <DisplayOutput 
          header={header}
        />
      </>
    );
  }
}
