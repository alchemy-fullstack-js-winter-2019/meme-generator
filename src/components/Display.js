import React from 'react';
import PropTypes from 'prop-types';

function Display({ header, footer, imgUrl, headerColor, footerColor, headerFont, footerFont, memeRef }) {
  let fontSize = `${100 - header.length}px`;
  const headerStyle = {
    color: headerColor,
    fontFamily: headerFont,
    fontSize
  };
  const footerStyle = {
    color: footerColor,
    fontFamily: footerFont,
    fontSize
  };

  return <div ref={memeRef}>
  <h2 style=({ headerStyle> headerColor }) </h2>;
}

Display.propTypes = {
  formattedText: PropTypes.string,
};

export default Display;
