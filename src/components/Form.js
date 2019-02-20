import React from 'react';
import PropTypes from 'prop-types';

function Form({ header, footer, imgUrl, headerColor, footerColor, headerFont, footerFont, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <TextControl name="header" text={header} color={headerColor} font={headerFont} onChange={onChange} />
      <TextControl name="footer" text={footer} color={footerColor} font={footerFont} onChange={onChange} />
      <input type="url" name="imgUrl" value={imgUrl} onChange={onChange} />
      <button type="submit">Save Meme</button>
    </form>
  );
}

Form.propTypes = {
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  headerFont: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  footerFont: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

function TextControl({ color, font, onChange }) {
  return (
    <>
      <input type="color" name={`${name}Color`} value={color} onChange={onChange} />
      <input type="text" name={`${name}Font`} value={font} onChange={onChange} />  
    </>
  );
}

TextControl.propTypes = {
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};



export default Form;
