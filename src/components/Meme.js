import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meme.css';

function Meme({ bottomCaption, topCaption, url, imageRef }) {

    return (
        <div  className={styles.div} ref={imageRef}>
            {url && <img src={url}/> }
            <h2 className={styles.header}>{topCaption}</h2>
            <h2 className={styles.footer}>{bottomCaption}</h2>
        </div>
    );
}
Meme.propTypes = {
    topCaption: PropTypes.string.isRequired,
    bottomCaption: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageRef: PropTypes.object.isRequired
};

export default Meme;
