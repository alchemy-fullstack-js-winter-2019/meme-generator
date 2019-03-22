import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

function Form({ img, header, footer, handleChange, onSubmit, color, font }) {
  const colors = ['white', 'red', 'black', 'blue'].map(c => {
    return <option key={c} value={c}>{c}</option>;
  });

  const fonts = ['arial', 'times', 'courier'].map(f => {
    return <option key={f} value={f}>{f}</option>;
  });  
  return (
    <form onSubmit={onSubmit}>
      <p>Image URL: <input name="img" type="text" value={img} onChange={handleChange}/></p>
      <p>Header: <input name="header" type="text" value={header} onChange={handleChange}/></p>
      <p>Footer: <input name="footer" type="text" value={footer} onChange={handleChange}/></p>
      <p>Color:
        <select name="color" value={color} onChange={handleChange}>
          {colors}
        </select>
      </p>
      <p>Font:
        <select name="font" value={font} onChange={handleChange}>
          {fonts}
        </select>
      </p>
      <button type="submit">Save Image</button>
    </form>
  );
}

Form.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  color: PropTypes.string,
  font: PropTypes.string
};

export default Form;
