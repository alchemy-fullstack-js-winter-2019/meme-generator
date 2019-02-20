import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.memeTextRef = React.createRef();
  }

  state = {
    headerText: 'Add Header Text',
    footerText: 'Add Footer Text',
    imgUpload: '',
    imgUrl: 'Paste Image Url'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { headerText, footerText, imgUpload, imgUrl } = this.state;
    return (
      <>
      <h1>Meme Generatoooor</h1>
      <input onChange={this.handleChange} type="text" name="headerText" value={headerText}></input>
      <input onChange={this.handleChange} type="text" name="footerText" value={footerText}></input>
      <input onChange={this.handleChange} type="text" name="imgUrl" value={imgUrl}></input>
      <h2>OR</h2>
      <input onChange={this.handleChange} type="file" name="imgUpload" value={imgUpload}></input>
      <h3 ref={this.memeTextRef}>{headerText}</h3>
      <h3 ref={this.memeTextRef}>{footerText}</h3>
      </>
    );
  }
}
