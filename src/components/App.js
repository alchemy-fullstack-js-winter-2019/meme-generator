import React, { Component } from 'react';
// import meme1 from '../assets/meme1.jpg';
// import meme2 from '../assets/meme2.jpg';
// import meme3 from '../assets/meme3.jpg';
// import meme4 from '../assets/meme4.jpg';
// import meme5 from '../assets/meme5.jpg';
// import meme6 from '../assets/meme6.jpg';
// import meme7 from '../assets/meme7.jpg';
// import meme8 from '../assets/meme8.jpg';
// import meme9 from '../assets/meme9.jpg';
// import meme10 from '../assets/meme10.jpg';

// import DomToImage from 'dom-to-image';
// import FileSaver from './FileSaver';

export default class App extends Component {
  state = {
    header: '',
    footer: '',
    imageUrl: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });


  render() {
    const { header, footer, image } = this.state;
    
    // const memeOptions = ['meme1', 'meme2', 'meme3', 'meme4', 'meme5', 'meme6', 'meme7', 'meme8', 'meme9', 'meme10'].map(m => {
    //   return <option key={m} value={m}>{m}</option>;
    // });

    // const fontOptions = [].map(f => {
    //   return <option key={f} value={f}>{f}</option>;
    // });

    // const fontColorOptions = [].map(c => {
    //   return <option key={c} value={c}>{c}</option>;
    // });

    return (

      <>
        <input name="text" value={header} onChange={this.handleChange} /> 
        <input name="text" value={footer} onChange={this.handleChange} />
        <input name="url" value={imgUrl} onChange={this.handleChange} />
        <select name='meme' onChange={this.handleChange} value={image}>
          {memeOptions}
        </select>

//proptypes

        <div className="meme">
          <h2 className="header">{header}</h2>
          <h2 className="footer">{footer}</h2>
        </div>
      </>
    );
  }
}
