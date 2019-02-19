import React from 'react';
import PropTypes from 'prop-types';

function TextFormatter({ text, handleChange, font, textToImage }) {
  const fontOptions = ['Alligator', 'Basic', 'Twisted', 'Whimsy', 'Ghost', 'Goofy', 'DOSRebel', 'Diamond', 'Digital', 'Diet Cola'].map(f => {
    return <option key={f} value={f}>{f}</option>;
  });

  return (
    <form onSubmit={textToImage}>
      <label>
          Type Your Text:
        <input type='text' name='text' value={text} onChange={handleChange}></input>
      </label>
        
      <select name='font' value={font} onChange={handleChange}>
        {fontOptions}
      </select>

      <button type="submit">
        Create Image
      </button>
    </form>
  );
}

TextFormatter.propTypes = {
  text: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  textToImage: PropTypes.func.isRequired
};

export default TextFormatter;
