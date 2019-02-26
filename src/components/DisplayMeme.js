import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/DisplayMeme.css';

function DisplayMeme({ memeRef, header, headerColor, footer, footerColor, imgUrl }) {
  return (
    <div ref={memeRef} styles={styles.div}>
      <h2 style={{ color: `${headerColor}` }} className={styles.header}>{header}</h2>
      <img src={imgUrl}/>
      <h2 style={{ color: `${footerColor}` }} className={styles.footer}>{footer}</h2>
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
