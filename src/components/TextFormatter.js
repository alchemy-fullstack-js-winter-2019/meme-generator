import React from 'react';
import PropTypes from 'prop-types';

function TextFormatter({
  text,
  font,
  handleChange,
  onSubmit
}) {
  const fontOptions = ['Basic', 'Weird'].map(f => {
    return <option key={f} value={f}>{f}</option>;
  });

  return (
    <form onSubmit={onSubmit}>
      <select name="font" onChange={handleChange} value={font}>
        {fontOptions}
      </select>
      <input type="text" name="text" value={text} onChange={handleChange}></input>
      <button type="submit">Create Image</button>
    </form>
  );
}

TextFormatter.propTypes = {
  text: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default TextFormatter;
