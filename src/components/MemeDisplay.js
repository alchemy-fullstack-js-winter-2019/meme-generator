import React from 'react';
import PropTypes from 'prop-types';
import MemeInputs from './MemeInputs';
import MemeFonts from './MemeFonts';
import MemeImgText from './MemeImgText';

function MemeDisplay({
  headerText,
  imageUrl,
  footerText,
  handleChange,
  memeToImage,
  fontColor,
  fontFamily,
  fontSize
}) {
  return (
    <form onSubmit={memeToImage}>
      <MemeFonts handleChange={handleChange}/>
      <MemeInputs headerText={headerText}
        imageUrl={imageUrl}
        footerText={footerText}
        handleChange={handleChange}
      />
      <MemeImgText headerText={headerText}
        imageUrl={imageUrl}
        footerText={footerText}
        fontColor={fontColor}
        fontSize={fontSize}
        fontFamily={fontFamily}
      />
    </form>
  );
}

MemeDisplay.propTypes = {
  headerText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  memeToImage: PropTypes.func.isRequired,
  fontColor: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired
};

export default MemeDisplay;
