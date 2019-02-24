import React from 'react';
import PropTypes from 'prop-types';

function DisplayMeme({ memeRef, header, headerColor, footer, footerColor, imgUrl }) {
  return (
    <div rev={memeRef}>
      <h2 style={{ color: `${headerColor}` }}>{header}</h2>
      <img src={imgUrl}/>
      <h4 style={{ color: `${footerColor}` }}>{footer}</h4>
    </div>
  );
}

DisplayMeme.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  memeRef: PropTypes.object.isRequired,
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
};

export default DisplayMeme;
