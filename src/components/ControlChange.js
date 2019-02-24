import React from 'react';
import PropTypes from 'prop-types';

function ControlChange({ header, footer, headerColor, footerColor, headerFont, footerFont, onChange, imgUrl, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <TextControl name="header" text={header} color={headerColor} font={headerFont} onChange={onChange} />
      <TextControl name="footer" text={footer} color={footerColor} font={footerFont} onChange={onChange} />
      <input type="url" name="imgUrl" value={imgUrl} onChange={onChange} />
      <button type="submit">Save Meme</button>

    </form>
  );
}

ControlChange.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  headerFont: PropTypes.string.isRequired,
  footerFont: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

function TextControl({ name, text, color, font, onChange }) {
  return (
    <>
      <input type="text" name={name} value={text} onChange={onChange} />
      <input type="color" name={`${name}Color`} value={color} onChange={onChange} />
      <input type="text" name={`${name}Font`} value={font} onChange={onChange} />
      </>
  );
}

TextControl.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ControlChange;
