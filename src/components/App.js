import React, { PureComponent } from 'react';
import UserInput from './children/UserInput';
import DankMemeDisplay from './children/DankMemeDisplay';
import domToImage from 'dom-to-image';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
  }
  state = {
    topText: '',
    bottomText: '',
    url: '',
    color: ''
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  memeToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.memeRef.current)
      .then(img => {
        this.setState({ img });
      });
  };
  render() {
    const { topText, bottomText, url, color } = this.state;
    return (
        <>
          <UserInput 
            topText={topText} 
            bottomText={bottomText} 
            url={url} 
            color={color} 
            handleChange={this.handleChange}
          />
          <DankMemeDisplay
            topText={topText} 
            bottomText={bottomText} 
            url={url} 
            color={color}
            memeRef={this.memeRef}
          />
        </>
    );
  }
}
