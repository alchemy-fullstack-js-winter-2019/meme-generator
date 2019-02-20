import React from 'react';
import PropTypes from 'prop-types';

function TextFormatter({
  text, font, onChange, onSubmit
}) {
  const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Basic'].map(f => {
    return <option key={f} value={f}>{f}</option>;
  });
  return (
    <form onSubmit={onSubmit}>
      <select name="font" value={font} onChange={onChange}>
        {fontOptions}
      </select>
      <input type="text"  name="text" onChange={onChange} value={text} />
      <button type="submit"> Create Image</button>
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
