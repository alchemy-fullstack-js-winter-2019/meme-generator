import React from 'react';
import PropTypes from 'prop-types';

function UserInput({
  topText,
  handleChange
}) {
  return (
    <input type="text" name="topText" value={topText} onChange={handleChange}></input>
  );
}

UserInput.propTypes = {
  topText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default UserInput;
