import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meme.css';

function Meme({ bottomCaption, topCaption, url, imageRef, fontColor }) {
    const font = {
        color: fontColor
    };
    return (
        <div  className={styles.div} ref={imageRef}>
            {url && <img src={url}/> }
            <h2 className={styles.header} style={font}>{topCaption}</h2>
            <h2 className={styles.footer} style={font}>{bottomCaption}</h2>
        </div>
    );
}
Meme.propTypes = {
    topCaption: PropTypes.string.isRequired,
    bottomCaption: PropTypes.string.isRequired,
    fontColor: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageRef: PropTypes.object.isRequired
};

export default Meme;
