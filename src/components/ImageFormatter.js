import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/App.css';

function ImageFormatter({ memeRef, header, footer, imageUrl }) {
  return (
    <Fragment>
      <img className={styles.background} src='https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-037.jpg'/>
      <div className={styles.container}>
        <div className={styles.meme} ref={memeRef}>
          <p className={styles.header}>{header}</p>
          <img src={imageUrl} className={styles.img}/>
          <p className={styles.footer}>{footer}</p>
        </div>
      </div>
    </Fragment>
  );
}


ImageFormatter.propTypes = {
  memeRef: PropTypes.object.isRequired,
  header: PropTypes.string,
  footer: PropTypes.string,
  imageUrl: PropTypes.string.isRequired
};

export default ImageFormatter;
