import React from 'react';
import PropTypes from 'prop-types';

function UserInput({
  topText,
  bottomText,
  handleChange
}) {
  return (
    <>
      <input type="text" name="topText" value={topText} onChange={handleChange}></input>
      <input type="text" name="bottomText" value={bottomText} onChange={handleChange}></input>
    </>
  );
}

UserInput.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default UserInput;
