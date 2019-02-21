import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meme.css';

function Meme({ bottomCaption, topCaption, url, imageRef, fontColor, font }) {
    const fontVar = {
        color: fontColor,
        fontFamily: font
        
    };
    return (
        <div  className={styles.div} ref={imageRef}>
            {url && <img src={url}/> }
            <h2 className={styles.header} style={fontVar}>{topCaption}</h2>
            <h2 className={styles.footer} style={fontVar}>{bottomCaption}</h2>
        </div>
    );
}
Meme.propTypes = {
    topCaption: PropTypes.string.isRequired,
    bottomCaption: PropTypes.string.isRequired,
    fontColor: PropTypes.string.isRequired,
    font: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageRef: PropTypes.object.isRequired
};

export default Meme;
