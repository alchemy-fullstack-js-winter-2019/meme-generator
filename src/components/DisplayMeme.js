import React from 'react';
import PropTypes from 'prop-types';

function DisplayMeme({ memeRef, header, imgUrl, footer }) {
  return (
    <div ref={memeRef}> 
      <h1>{header}</h1>
      {imgUrl && <img src={imgUrl}/>}
      <h2>{footer}</h2>
    </div>
  );
}

DisplayMeme.propTypes = {
  memeRef: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired
};

export default DisplayMeme;
