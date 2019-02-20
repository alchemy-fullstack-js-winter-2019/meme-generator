import React, { PureComponent } from 'react';
// import DomToImage from 'dom-to-image';
// import FileSaver from './FileSaver';

export default class App extends PureComponent {
  state = {
    header: '',
    footer: ''
    // image: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };

  render() {
    const { header, footer } = this.state;

    return (
      <>
        
        <input name="text" value={header} onChange={this.handleChange} /> 
    {/* image */}
        <input name="text" value={footer} onChange={this.handleChange} />
    
        <div className="meme">
          <h2 className="header">{header}</h2>
          <img/>
          <h2 className="footer">{footer}</h2>
        </div>
      </>
    );
  }
}
