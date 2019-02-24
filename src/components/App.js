import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  state = {
    img: '',
    header: '',
    footer: ''
  }

  handleChange = ({ target }) => {
    this.setState({ img: target.value });
  }

  render() {
    return (
      <>
        <h1>Meme Generator</h1>
        <form>
          <label>Upload Image</label>
          <input type="file" onChange={this.handleChange} value={this.state.img} />
        
          <label>Photo URL</label>
          <input type="url"/>
      
          <label>Header</label>
          <input type="text"/>
        
          <label>Footer</label>
          <input type="text"/>

          <button>Save MEME</button>
        </form>
       
      </>
    );
  }
}
