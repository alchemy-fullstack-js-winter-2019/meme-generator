import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeDisplay.css';

function MemeDisplay({ header, img, footer }) {
  return (
    <>
      <h2 className={`${styles.header}`}><pre>{header}</pre></h2>
          {img && <img src={img} />}
          <h2 className={`${styles.footer}`}>{footer}</h2>
    </>      
  );
}

MemeDisplay.propTypes = {
  header: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired
};

export default MemeDisplay;
