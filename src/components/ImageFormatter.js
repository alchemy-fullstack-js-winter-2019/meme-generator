import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/App.css';

function ImageFormatter({ header, footer, imageUrl }) {
  return (
    <Fragment>
      <div className={styles.meme} id="meme">
        <p className={styles.header}>{header}</p>
        <img src={imageUrl} className={styles.img}/>
        <p className={styles.footer}>{footer}</p>
      </div>
    </Fragment>
  );
}


ImageFormatter.propTypes = {
  header: PropTypes.string,
  footer: PropTypes.string,
  imageUrl: PropTypes.string.isRequired
};

export default ImageFormatter;
