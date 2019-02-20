import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/App.css';

function Meme({
  memeRef,
  header,
  headerColor,
  footer,
  footerColor,
  url
}) {
  return (
    <div ref={memeRef} className={styles.final}>
      {header &&  <p style={{ color: headerColor }}>{header}</p>}
      {url && <img src={url} />}
      {footer && <p style={{ color: footerColor }}>{footer}</p>}
    </div>
  );
}

Meme.propTypes = {
  memeRef: PropTypes.object,
  header: PropTypes.string,
  headerColor: PropTypes.string,
  footer: PropTypes.string,
  footerColor: PropTypes.string,
  url: PropTypes.string
};

export default Meme;
