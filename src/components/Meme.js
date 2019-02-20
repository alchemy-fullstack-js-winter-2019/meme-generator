import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meme.css';

function Meme({ img, header, footer }) {
  return (
    <>
      <h2 className={styles.header}>{header}</h2>
      {img && <img src={img} />}
      <h2 className={styles.footer}>{footer}</h2>
    </>
  );
}

Meme.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired
};

export default Meme;
