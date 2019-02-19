import React, { PureComponent, Fragment } from 'react';
import figlet from 'figlet';

class App extends PureComponent {
  state = {
    clickCount: 0,
    text: '',
    formattedText: '',
    font: ''
  }

  formatText = () => {
    figlet.text(this.state.text, {
      font: this.state.font }, (err, data) => {
      if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
      this.setState({ formattedText: data });
    }); 
  }

  handleClick = () => {
    this.setState({ clickCount: this.state.clickCount + 1 }, () => {
      console.log('clicked', this.state.clickCount, 'times');
    });
  }

  handleChange = ({ target }) => {
    console.log(target.value, 'target');
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { text, formattedText } = this.state;
    return (
      <Fragment>
        <h1>Heyo</h1>
        <form>
          <input type="text" name="text" value={text} onChange={this.handleChange}></input>
          <select name="font" onChange={this.handleChange}>
            <option selected disabled hidden>Pick a Font</option>
            <option value="Stellar" name="Stellar">Stellar</option>
            <option value="Speed" name="Speed">Speed</option>
            <option value="Ghost" name="Ghost">Ghost</option>
            <option value="Ghoulish" name="Ghoulish">Ghoulish</option>
          </select>
          <button onClick={this.handleClick}>Button</button>
        </form>
        <pre>{formattedText}</pre>
        <p>{text}</p>
      </Fragment>
    );
  }
}

export default App;
