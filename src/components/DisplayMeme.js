import React from 'react';
import PropTypes from 'prop-types';


function DisplayMeme({ header, footer, imgUrl }) {
  return (
  <>
  <div>
    <h2>{header}</h2>
    <img src={imgUrl} />
    <h2>{footer}</h2>
  </div>
  </>
  );
}

DisplayMeme.propTypes = {
  memeRef: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  // headerColor: PropTypes.string.isRequired,
  // footerColor: PropTypes.string.isRequired,
  // headerFont: PropTypes.string.isRequired,
  // footerFont: PropTypes.string.isRequired,
};

export default DisplayMeme;
