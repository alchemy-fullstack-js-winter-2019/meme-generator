import React from 'react';
import PropTypes from 'prop-types';

function TextBox({
  text
}) {
  return <input type="text" name="text" value={text}></input>;
}

TextBox.propTypes = {
  text: PropTypes.string
};

export default TextBox;
