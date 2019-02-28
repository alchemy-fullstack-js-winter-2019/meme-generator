import React from 'react';
import PropTypes from 'prop-types';
import './MemeForm.css';

function MemeForm({ header, img, footer, handleChange, saveImage }) {
  return (
    <>
      <h1>Meme Generator</h1>
      <form onSubmit={saveImage}>
        <span>  Header: <input name="header" type="text" value={header} onChange={handleChange}/></span>
        <span>  Image URL: <input name="img" type="text" value={img} onChange={handleChange}/></span>
        <span>  Footer: <input name="footer" type="text" value={footer} onChange={handleChange}/></span>
        {img && <button onClick={saveImage}>  Save Image</button>}
      </form>
    </>
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



