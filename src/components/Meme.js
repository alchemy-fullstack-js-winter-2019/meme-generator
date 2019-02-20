import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/App.css';

function Meme({
  ref,
  header,
  footer,
  url,
  createAndSaveMeme
}) {
  return (
    <Fragment>
      <div ref={ref} className={styles.final}>
        {header &&  <p>{header}</p>}
        <img src={url} />
        {footer && <p>{footer}</p>}
      </div>

      {url && header && <button onClick={createAndSaveMeme}>Save Meme</button>}
    </Fragment>
  );
}

Meme.propTypes = {
  ref: PropTypes.object,
  header: PropTypes.string,
  footer: PropTypes.string,
  url: PropTypes.string,
  createAndSaveMeme: PropTypes.func.isRequired
};

export default Meme;
