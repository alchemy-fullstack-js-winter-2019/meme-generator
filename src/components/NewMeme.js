import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

function NewMeme({ memeRef, headerText, imgUrl, footerText, headerColor, footerColor, headerFont, footerFont }) {
  const headerStyle = {
    color: headerColor,
    fontFamily: headerFont,
    fontSize: '20px',
  };
  const footerStyle = {
    color: footerColor,
    fontFamily: footerFont,
    fontSize: '20px',
  };

  return (
    <div ref={memeRef} className={styles.memePreview}>
      <h3 style={headerStyle} className={styles.header}>{headerText}</h3>
      {imgUrl && <img  src={imgUrl}></img>}
      <h3 style={footerStyle} className={styles.footer}>{footerText}</h3>
    </div>
  );
}

NewMeme.propTypes = {
  memeRef: PropTypes.object,
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  footerFont: PropTypes.string.isRequired,
  headerFont: PropTypes.string.isRequired

};

export default NewMeme;
