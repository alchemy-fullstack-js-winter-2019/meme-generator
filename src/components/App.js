/*eslint-disable no-console*/
import React, { Fragment, PureComponent } from 'react';
import 'normalize-css';
import styles from '../css/App.css';
import figlet from 'figlet';

//class components are used when we need to store state
export default class App extends PureComponent {
  state = {
    clicks: 0,
    text: '',
    formattedText: '',
    font: 'DOS Rebel'
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 }, () => {
      console.log(this.state.clicks);
    });
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value }, () => {
      this.formatText();
    });
  }

  formatText = () => {
    const font = 'Ghost';
    figlet.text(this.state.text, { font }, (err, data) => {
      if(err) return console.error(err);
      this.setState({ formattedText: data });
    });
  }

  render() {
    return (
      <Fragment>
        <label>
          Type Your Text:
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
        </label>
        
        <select>

        </select>

        <button onClick={this.handleClick}>
          Click Me
        </button>

        <h2 className={styles.text}>
          {this.state.text}
        </h2>

        <h2 className={styles.formattedText}>
          <pre>
            {this.state.formattedText}
          </pre>
        </h2>

      </Fragment>
    );
  }
}
