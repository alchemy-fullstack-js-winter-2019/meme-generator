import React from 'react';
import PropTypes from 'prop-types';
import './MemeForm.css';

function MemeForm({ header, headerColor, headerFont, img, footer, footerColor, footerFont, handleChange, saveImage }) {
  return (
    <>
      <h1>Meme Generator</h1>
      <form onSubmit={saveImage}>
        <span>  Header: <input name="header" type="text" value={header} onChange={handleChange}/></span>
        <span>  Header Color: <input name="headerColor" type="color" value={headerColor} onChange={handleChange}/></span>
        <span>  Header Font: <input name="headerFont" type="text" value={headerFont} onChange={handleChange}/></span>
        <span>  Image URL: <input name="img" type="text" value={img} onChange={handleChange}/></span>
        <span>  Footer: <input name="footer" type="text" value={footer} onChange={handleChange}/></span>
        <span>  Footer Color: <input name="footerColor" type="color" value={footerColor} onChange={handleChange}/></span>
        <span>  Footer Font: <input name="footerFont" type="text" value={footerFont} onChange={handleChange}/></span>
        {img && <button onClick={saveImage}>  Save Image</button>}
      </form>
    </>
  );
}

MemeForm.propTypes = {
  img: PropTypes.string,
  header: PropTypes.string,
  headerColor: PropTypes.string,
  headerFont: PropTypes.string,
  footer: PropTypes.string,
  footerColor: PropTypes.string,
  footerFont: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  saveImage: PropTypes.func.isRequired
};

export default MemeForm;



