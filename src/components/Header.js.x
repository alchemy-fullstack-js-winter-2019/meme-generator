import React from 'react';

function Header() {
  return (
    <header>
      <h1>Meme Generator</h1>
      <input type="text" name="text" value={text} onChange={this.handleChange} />
      <h1>{text}</h1>
    </header>
  );
}


export default Header;
