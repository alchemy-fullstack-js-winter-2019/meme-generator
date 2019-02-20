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

  return (<div ref={memeRef}>
    <h2 style={headerStyle}>{header}</h2>
    <img src={imgUrl} />
    <h2 style={footerStyle}>{footer}</h2>
  </div>
  );
}

Display.propTypes = {
  memeRef: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  headerFont: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  footerFont: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default Display;
