import React, { PureComponent, Fragment } from 'react';
import styles from '../css/App.css';

class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    url: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { header, footer, url } = this.state;
    return (
      <Fragment>
        <div className={styles.meme}>
          <h1>Meme Generator</h1>
          <form>
            <input type="text" name="header" value={this.header} onChange={this.handleChange}></input>
            <input type="text" name="footer" value={this.footer} onChange={this.handleChange}></input>
            <input type="url" name="url" value={this.url} onChange={this.handleChange}></input>
          </form>
        </div>
        <div className={styles.final}>
          <p>{header}</p>
          <img src={url} />
          <p>{footer}</p>
        </div>
      </Fragment>
    );
  }
}

export default App;
