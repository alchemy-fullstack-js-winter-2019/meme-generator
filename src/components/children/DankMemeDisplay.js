import React from 'react';
import PropTypes from 'prop-types';

function DankMemeDisplay({ topText, bottomText, url }) {
  return (
    <div>
      <h3>
        {topText}
      </h3>
      <img src={url}/>
      <h3>
        {bottomText}
      </h3>
    </div>
  );
}

DankMemeDisplay.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default DankMemeDisplay;
