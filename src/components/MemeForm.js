import React from 'react';
import PropTypes from 'prop-types';

function MemeForm({ header, footer, imgUrl, headerColor, footerColor, headerFont, footerFont, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <span>Write something funny here for your opener:</span><TextControl name="header" text={header} color={headerColor} font={headerFont} onChange={onChange} /> 
      <span>Add a footnote:</span><TextControl name="footer" text={footer} color={footerColor} font={footerFont} onChange={onChange} />
      <span>Paste your imageUrl here:</span><input type="url" name="imgUrl" value={imgUrl} onChange={onChange} /> 
      <button type="submit">Save Your Meme</button>
    </form>
  );
}

MemeForm.propTypes = {
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

function TextControl({ name, text, color, font, onChange }) {
  return (
    <>
      <input type="text" name={name} value={text} onChange={onChange} />
      <p> Click the color bar to change font colors </p>
      <input type="color" name={`${name}Color`} value={color} onChange={onChange} />
      <p>   Type your font choice here: </p> <input type="text" name={`${name}Font`} value={font} onChange={onChange} />
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

export default MemeForm;
