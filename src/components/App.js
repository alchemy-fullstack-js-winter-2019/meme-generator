import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  state = {
    img: '',
    header: '',
    footer: ''
  }

  onChange = ({ target }) => {
    this.setState({ img: target.value });
  }

  render() {
    return (
      <>
        <div>
          <h1>Meme Generator</h1>
          <p>Upload Image</p>
          <input type="file" onChange={this.onChange} value={this.state.img} />
        </div>
        <div>
          <p>Photo URL</p>
          <input type="url"/>
        </div>
        <div>
          <p>Header</p>
          <input type="text"/>
        </div>
        <div>
          Footer
          <input type="text"/>
        </div>
      </>
    );
  }
}
