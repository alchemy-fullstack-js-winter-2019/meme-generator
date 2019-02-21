import React from 'react';
import PropTypes from 'prop-types';

function Display({ title }) {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
}

Display.propTypes = {
  title: PropTypes.string.isRequired
};

export default Display;
