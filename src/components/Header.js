import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class Header extends PureComponent {
  state ={
    text: '',
    font: 'Wavy',
    formattedText: ''
  };

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text,
      { font },
      (err, formattedText) => {
        if(err) return console.error(err);

        this.setState({ formattedText });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => this.formatText());
  };

  render() {
    const { text, formattedText } = this.state;

    return (
      <>
        <p>Header: <input type="text" value={text} onChange={this.handleChange}/></p>
      </>
    );
  }
}
