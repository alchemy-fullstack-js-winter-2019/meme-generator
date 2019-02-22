import React from 'react';
import PropTypes from 'prop-types';

function DisplayOutput({ header }) {
  let fontSize = `${100 - header.length}px`;
  const headerStyle = {
    fontSize
  };

  return (
    <div>
      <h2 style={headerStyle}>{header}</h2>
    </div>
  );
}

DisplayOutput.propTypes = {
  header: PropTypes.string.isRequired
};

export default DisplayOutput;
