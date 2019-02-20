import React, { PureComponent } from 'react';
import TextBox from './children/TextBox';



export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    text: null
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() {
    const { text } = this.state;
    return (
        <>
          <TextBox 
            text={text} 
            handleChange={this.handleChange}
          />
        </>
    );
  }
}


