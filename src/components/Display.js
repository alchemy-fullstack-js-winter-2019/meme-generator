import React from 'react';
import PropTypes from 'prop-types';

function DisplayOutput({ header, footer }) {
  let fontSize = `${100 - header.length}px`;
  const headerStyle = {
    fontSize
  };
  const footerStyle = {
    fontSize
  };

  return (
    <div>
      <h2 style={headerStyle}>{header}</h2>
      <h2 style={footerStyle}>{footer}</h2>
    </div>
  );
}

DisplayOutput.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired
};

export default DisplayOutput;
