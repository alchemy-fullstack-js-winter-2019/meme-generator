import React, { PureComponent } from 'react';
import UserInput from './children/UserInput';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    topText: null
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() {
    const { topText } = this.state;
    return (
        <>
          <UserInput 
            topText={topText} 
            handleChange={this.handleChange}
          />
        </>
    );
  }
}
