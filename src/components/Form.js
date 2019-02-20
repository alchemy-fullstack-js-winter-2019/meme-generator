import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

function Form({ img, header, footer, handleChange, saveImage }) {
  return (
    <form onSubmit={saveImage}>
      <p>Image URL: <input name="img" type="text" value={img} onChange={handleChange}/></p>
      <p>Header: <input name="header" type="text" value={header} onChange={handleChange}/></p>
      <p>Footer: <input name="footer" type="text" value={footer} onChange={handleChange}/></p>
      <button type="submit">Save Image</button>
    </form>
  );
}

Form.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveImage: PropTypes.func.isRequired
};

export default Form;
