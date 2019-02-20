import React from 'react';
import PropTypes from 'prop-types';

function UserInput({
  text,
  handleChange
}) {
  return (
    <input type="text" name="text" value={text} onChange={handleChange}></input>
  );
}

UserInput.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default UserInput;
