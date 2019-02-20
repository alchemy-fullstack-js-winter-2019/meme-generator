import React, { PureComponent } from 'react';
import UserInput from './children/UserInput';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    topText: null,
    bottomText: null
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() {
    const { topText, bottomText } = this.state;
    return (
        <>
          <UserInput 
            topText={topText} 
            bottomText={bottomText} 
            handleChange={this.handleChange}
          />
        </>
    );
  }
}
