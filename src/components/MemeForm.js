import React from 'react';
import PropTypes from 'prop-types';

function MemeForm({ header, img, footer, handleChange, saveImage }) {
  return (
    <form onSubmit={saveImage}>
      <h1>Meme Generator</h1>
      <span>  Header: <input name="header" type="text" value={header} onChange={handleChange}/></span>
      <span>  Image URL: <input name="img" type="text" value={img} onChange={handleChange}/></span>
      <span>  Footer: <input name="footer" type="text" value={footer} onChange={handleChange}/></span>
      {img && <button onClick={saveImage}>Save Image</button>}
    </form>
  );
}

MemeForm.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveImage: PropTypes.func.isRequired
};

export default MemeForm;



