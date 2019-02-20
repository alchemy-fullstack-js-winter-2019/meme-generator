import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/App.css';

function Meme({
  memeRef,
  header,
  footer,
  url
}) {
  return (
    <div ref={memeRef} className={styles.final}>
      {header &&  <p>{header}</p>}
      {url && <img src={url} />}
      {footer && <p>{footer}</p>}
    </div>
  );
}

Meme.propTypes = {
  memeRef: PropTypes.object,
  header: PropTypes.string,
  footer: PropTypes.string,
  url: PropTypes.string
};

export default Meme;
