import React, { PureComponent, Fragment } from 'react';

class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    url: '',
    clicked: false
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({ clicked: true }, () => {
      console.log(this.state);
    });
  }

  render() {
    const { header, footer, url, clicked } = this.state;
    return (
      <Fragment>
        <h1>Meme Generator</h1>
        <form>
          <input type="text" name="header" value={this.header} onChange={this.handleChange}></input>
          <input type="text" name="footer" value={this.footer} onChange={this.handleChange}></input>
          <input type="url" name="url" value={this.url} onChange={this.handleChange}></input>
          <button value={this.clicked} onClick={this.handleClick}>Create Meme</button>
        </form>
        {clicked && <p>{header}</p>}
        {clicked && <img src={url} />}
        {clicked && <p>{footer}</p>}
      </Fragment>
    );
  }
}

export default App;
