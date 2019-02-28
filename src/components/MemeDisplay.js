import React from 'react';
import PropTypes from 'prop-types';

function MemeDisplay({ header, img, footer }) {
  return (
    <>
      <h2><pre>{header}</pre></h2>
          {img && <img src={img} />}
          <h2>{footer}</h2>
    </>      
  );
}

MemeDisplay.propTypes = {
  header: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired
};

export default MemeDisplay;
