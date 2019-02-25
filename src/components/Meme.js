import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/App.css';

function Meme({
  memeRef,
  header,
  headerColor,
  headerFont,
  footer,
  footerColor,
  footerFont,
  url
}) {

  const headerStyle = {
    color: headerColor,
    fontFamily: headerFont
  };

  const footerStyle = {
    color: footerColor,
    fontFamily: footerFont
  };

  return (
    <div ref={memeRef} className={styles.final}>
      {header &&  <p style={headerStyle}>{header}</p>}
      {url && <img src={url} />}
      {footer && <p style={footerStyle}>{footer}</p>}
    </div>
  );
}

Meme.propTypes = {
  memeRef: PropTypes.object,
  header: PropTypes.string,
  headerColor: PropTypes.string,
  headerFont: PropTypes.string,
  footer: PropTypes.string,
  footerColor: PropTypes.string,
  footerFont: PropTypes.string,
  url: PropTypes.string
};

export default Meme;
