import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeDisplay.css';

function MemeDisplay({ header, headerColor, img, footer, footerColor }) {
  return (
    <>
      <h2 className={`${styles.header}`} style={{ color: headerColor }}><pre>{header}</pre></h2>
          {img && <img src={img} />}
          <h2 className={`${styles.footer}`} style={{ color: footerColor }}>{footer}</h2>
    </>      
  );
}

MemeDisplay.propTypes = {
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired
};

export default MemeDisplay;
