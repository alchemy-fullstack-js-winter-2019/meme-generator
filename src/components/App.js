import React, { PureComponent } from 'react';
import UserInput from './children/UserInput';
import DankMemeDisplay from './children/DankMemeDisplay';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
  }
  state = {
    topText: null,
    bottomText: null,
    url: null,
    color: null
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
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
          />
        </>
    );
  }
}
