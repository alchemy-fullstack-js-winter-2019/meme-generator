import React from 'react';
import PropTypes from 'prop-types';

function TextFormatter({
  text,
  font,
  handleChange,
  texttoImage }) {
  const fontList = ['Chunky', 'Arrows', 'Bubble', 'Catwalk', 'Computer'].map(font => {
    return <option key={font} value={font}>{font}</option>;
  });
}

TextFormatter.propTypes = {
  text: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  textToImage: PropTypes.func.isRequired
};

export default TextFormatter;
