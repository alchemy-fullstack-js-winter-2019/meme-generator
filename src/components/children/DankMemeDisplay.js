import React from 'react';
import PropTypes from 'prop-types';

// meme url for testing
// https://upload.wikimedia.org/wikipedia/commons/d/df/Doge_homemade_meme.jpg

function DankMemeDisplay({ topText, bottomText, url, color }) {
  const h3Styles = {
    color: color
  };
  return (
    <div>
      <h3 style={h3Styles}>
        {topText}
      </h3>
      <img src={url}/>
      <h3 style={h3Styles}>
        {bottomText}
      </h3>
    </div>
  );
}

DankMemeDisplay.propTypes = {
  topText: PropTypes.string,
  bottomText: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string
};

export default DankMemeDisplay;
