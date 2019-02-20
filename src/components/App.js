import React, { PureComponent, Fragment } from 'react';

class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    url: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      console.log(this.state.header);
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Meme Generator</h1>
        <form>
          <input type="text" name="header" value={this.header} onChange={this.handleChange}></input>
          <input type="text" value="footer"></input>
          <input type="url" value="url"></input>
          <button>Create Meme</button>
        </form>
      </Fragment>
    );
  }
}

export default App;
