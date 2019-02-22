import React from 'react';
import PropTypes from 'prop-types';

function MemeColorFormatter({ color, handleChange }) {
  const colorOptions = ['white', 'black'].map(c => {
    return <option key={c} value={c}>{c}</option>;
  });

  return (
    <select name='color' value={color} onChange={handleChange}>
      {colorOptions}
    </select>
  );
}

MemeColorFormatter.propTypes = {
  color: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MemeColorFormatter;
