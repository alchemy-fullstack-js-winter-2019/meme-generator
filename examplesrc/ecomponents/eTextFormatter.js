import React from 'react';
import PropTypes from 'prop-types';

function TextFormatter({
  text,
  font,
  handleChange,
  textToImage }) {
  const fontOptions = ['Ghost', 'Weird', 'Chunky'];
  return (
    <form onsumbit={this.textToImage}>
      <select name="font" onChange={this.handleChange} value={font}>
        {fontOptions}
      </select>
      <input type="text" name="text" value={this.state.text} onChange={this.handleChange} /> 
      <button type="submit">CreateImage</button>
    </form>
  );
}

TextFormatter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextFormatter;
