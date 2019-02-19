import React, { PureComponent, Fragment } from 'react';
import figlet from 'figlet';

class App extends PureComponent {
  state = {
    clickCount: 0,
    text: '',
    formattedText: '',
    font: 'Ghoulish',
    img: ''
  }

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text, {
      font }, (err, data) => {
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
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { text, formattedText } = this.state;

    const fontOptions = ['Stellar', 'Speed', 'Ghost', 'Ghoulish'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });
    return (
      <Fragment>
        <h1>Heyo</h1>
        <form>
          <input type="text" name="text" value={text} onChange={this.handleChange}></input>
          <select name="font" onChange={this.handleChange}>
            <option selected disabled hidden>Pick a Font</option>
            {fontOptions}
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
