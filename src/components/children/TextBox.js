import React from 'react';
import PropTypes from 'prop-types';

function TextBox({
  text,
  handleChange
}) {
  return (
    <input type="text" name="text" value={text} onChange={handleChange}></input>
  );
}

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextBox;
