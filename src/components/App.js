import React, { PureComponent, Fragment } from 'react';
import figlet from 'figlet';

class App extends PureComponent {
  state = {
    clickCount: 0,
    text: '',
    formattedText: ''
  }

  formatText = () => {
    figlet.text(this.state.text, {
      font: 'Ghoulish',
      horizontalLayout: 'default',
      verticalLayout: 'default' }, (err, data) => {
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

  handleText = ({ target }) => {
    this.setState({ text: target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { text, formattedText } = this.state;
    return (
      <Fragment>
        <h1>Heyo</h1>
        <input type="text" name="text" value={text} onChange={this.handleText}></input>
        <button onClick={this.handleClick}>Button</button>
        <h1>{formattedText}</h1>
        <p>{text}</p>
      </Fragment>
    );
  }
}

export default App;
