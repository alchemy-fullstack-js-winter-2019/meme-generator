import React from 'react';
import PropTypes from 'prop-types';

function UserInput({
  topText,
  bottomText,
  url,
  color,
  handleChange
}) {
  return (
    <>
      <label>
        Top text: 
        <input type="text" name="topText" value={topText} onChange={handleChange}></input>
      </label>
      <label>
        Bottom text: 
        <input type="text" name="bottomText" value={bottomText} onChange={handleChange}></input>
      </label>
      <label>
        URL: 
        <input type="url" name="url" value={url} onChange={handleChange}></input>
      </label>
      <label>
        Text Color:
        <input type="color" name="color" value={color} onChange={handleChange}></input>
      </label>
    </>
  );
}

UserInput.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default UserInput;
