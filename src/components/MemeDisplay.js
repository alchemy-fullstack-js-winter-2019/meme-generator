import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeDisplay.css';

function MemeDisplay({ header, headerColor, headerFont, img, footer, footerColor, footerFont }) {
  
  const headerStyle = {
    color: headerColor,
    fontFamily: headerFont
  };
  const footerStyle = {
    color: footerColor,
    fontFamily: footerFont
  };
  
  return (
    <>
      <h2 className={`${styles.header}`} style={headerStyle}><pre>{header}</pre></h2>
      {img && <img src={img} />}
      <h2 className={`${styles.footer}`} style={footerStyle}>{footer}</h2>
    </>      
  );
}

MemeDisplay.propTypes = {
  header: PropTypes.string,
  headerColor: PropTypes.string,
  headerFont: PropTypes.string,
  img: PropTypes.string,
  footer: PropTypes.string,
  footerColor: PropTypes.string,
  footerFont: PropTypes.string
};

export default MemeDisplay;
