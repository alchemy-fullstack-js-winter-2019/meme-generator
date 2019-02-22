import React from 'react';
import PropTypes from 'prop-types';

function Controller({ header, footer, imageUrl, headerColor, footerColor, onChange }) {
  return (
    <form>
      <TextController name="header" text={header} color={headerColor}  onChange={onChange}/>
      <TextController name="footer" text={footer} color={footerColor}onChange={onChange}/>
      <input type="url" name="imageUrl" value={imageUrl} onChange={onChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

Controller.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

function TextController({ name, onChange, color, text }) {
  return (
    <>
      <input type="text" name={name} value={text} onChange={onChange}/>
      <input type="color" name={`${name}Color`} value={color} onChange={onChange} />
    </>
  );
}

TextController.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Controller;
