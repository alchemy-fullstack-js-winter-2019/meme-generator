import React from 'react';
import PropTypes from 'prop-types';

function Controller({ header, footer, imageUrl, onChange }) {
  return (
    <form>
      <TextController name="header" text={header} onChange={onChange}/>
      <TextController name="footer" text={footer} onChange={onChange}/>
      <input type="url" name="imageUrl" value={imageUrl} onChange={onChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

Controller.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

function TextController({ name, onChange, text }) {
  return (
    <>
      <input type="text" name={name} value={text} onChange={onChange}/>
    </>
  );
}

TextController.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Controller;
