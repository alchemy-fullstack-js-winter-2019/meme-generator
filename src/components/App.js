import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.formattedTextRef = React.createRef();
  }

  state = {
    headerText: 'Add Header Text',
    footerText: 'Add Footer Text',
    imgUrl: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { headerText, footerText, imgUrl } = this.state;
    return (
      <>
      <h1>Meme Generatoooor</h1>
      <input onChange={this.handleChange} type="text" name="headerText" value={headerText}></input>
      <input onChange={this.handleChange} type="text" name="footerText" value={footerText}></input>
      <input onChange={this.handleChange} type="file" name="imgUrl" value={imgUrl}></input>
      </>
    );
  }
}
