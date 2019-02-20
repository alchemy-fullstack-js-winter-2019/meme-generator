/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import AppDemo from './AppDemo';
// import 'normalize.css';

export default class App extends PureComponent {
  state = {
    headerText: '',
    footerText: '',
    imageUrl: '',
    meme: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.headerText, this.footerText;
    });
  }

  render() {
    const { headerText, footerText, imageUrl } = this.state;
    return (
      < >
        <AppDemo />

        <h1>App component</h1>
        <div>
          <input type="text" name="headerText" value={headerText} onChange={this.handleChange}/>
          <input type="text" name="imageUrl" value={imageUrl} onChange={this.handleChange}/>
          <input type="text" name="footerText" value={footerText} onChange={this.handleChange}/>
          <h3>{headerText}</h3>
          <img src={imageUrl}/>
          <h3>{footerText}</h3>
        </div>
      </>
    );
  }
}
