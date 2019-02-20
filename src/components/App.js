import React, { PureComponent, Fragment } from 'react';

class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    url: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      console.log(this.state);
    });
  }

  handleClick = event => {
    event.preventDefault();
    console.log('clicked!');
  }

  render() {
    return (
      <Fragment>
        <h1>Meme Generator</h1>
        <form>
          <input type="text" name="header" value={this.header} onChange={this.handleChange}></input>
          <input type="text" name="footer" value={this.footer} onChange={this.handleChange}></input>
          <input type="url" name="url" value={this.url} onChange={this.handleChange}></input>
          <button onClick={this.handleClick}>Create Meme</button>
        </form>
      </Fragment>
    );
  }
}

export default App;
