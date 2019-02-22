import React, { Component } from 'react';
import Controller from './Controller';
import DisplayOutput from './Display';

export default class App extends Component {

  state = {
    header: '',
    footer: '',
    imageUrl: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { 
      header,
      footer, 
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
          onChange={this.handleChange}
        />
        <DisplayOutput 
          header={header}
          footer={footer}
          imageUrl={imageUrl}
        />
      </>
    );
  }
}
