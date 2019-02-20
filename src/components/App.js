import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.formattedTextRef = React.createRef();
  }

  state = {
    header: '',
    footer: ''
    // image: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };

  render() {
    const { header, footer } = this.state;

    return (
      <>
        <input type="header" name="text" value={header} onChange={this.handleChange} />  
        <input type="footer" name="text" value={footer} onChange={this.handleChange} />  
        
        <h2>{header}</h2>
        <h2>{footer}</h2>
      </>
    );
  }
}
