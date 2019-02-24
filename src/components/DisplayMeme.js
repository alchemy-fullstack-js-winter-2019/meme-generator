import React from 'react';
import PropTypes from 'prop-types';

function DisplayMeme({ memeRef, header, imgUrl, footer, headerColor, headerFont, footerColor, footerFont }) {
  const headerStyle = {
    color: headerColor,
    fontFamily: headerFont,
  };
  const footerStyle = {
    color: footerColor,
    fontFamily: footerFont
  };
  return (
    <div ref={memeRef}> 
      <h1 style={headerStyle}>{header}</h1>
      {imgUrl && <img src={imgUrl}/>}
      <h2 style={footerStyle}>{footer}</h2>
    </div>
  );
}

DisplayMeme.propTypes = {
  memeRef: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired, 
  headerFont: PropTypes.string.isRequired,
  footerFont: PropTypes.string.isRequired
};

export default DisplayMeme;
