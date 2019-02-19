/*eslint-disable no-console*/
import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';
import figlet from 'figlet';

//class components are used when we need to store state
export default class App extends PureComponent {
  state = {
    clicks: 0,
    text: '',
    formattedText: ''
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    console.log(this.state.clicks);
    console.log('clicked');
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    this.formatText();
  }

  formatText = () => {
    // this.setState({ formattedText: figlet.text(this.state.text, {
    //   font: 'Ghost',
    //   horizontalLayout: 'default',
    //   verticalLayout: 'default'
    // }, function(err, data) {
    //   if(err) {
    //     console.log('Something went wrong...');
    //     console.dir(err);
    //     return;
    //   }
    //   console.log(data);
    // }) });

    figlet.text(this.state.text, {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, (err, data) => {
      if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log('data', data);
      this.setState({ formattedText: data });
      
    });
  }

  render() {
    return (
      <Fragment>
        <input type="text" value={this.state.text} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.formattedText}</h1>
      </Fragment>
    );
  }
}
