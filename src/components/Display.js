import React from 'react';
import PropTypes from 'prop-types';

function DisplayOutput({ header, footer, headerColor, headerFont, footerColor, imageUrl }) {
  let fontSize = `${100 - header.length}px`;
  const headerStyle = {
    fontSize,
    color: headerColor,
    fontFamily: headerFont
  };

  const footerStyle = {
    fontSize,
    color: footerColor
  };

  return (
    <div>
      <h2 style={headerStyle}>{header}</h2>
      <img src={imageUrl}/>
      <h2 style={footerStyle}>{footer}</h2>
    </div>
  );
}

DisplayOutput.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  headerFont: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired
};

export default DisplayOutput;
