import React from 'react';
import PropTypes from 'prop-types';

function Meme({ bottomCaption, topCaption, url, imageRef }) {
    const divStyle = { 
        background: `url(${url}) no-repeat fixed`,
        height: '500px',
        width: '500px',
        
    };
    const headerStyle = {
        textAlign: 'center',
        position: 'relative',
        top: '10px'
    };
    const footerStyle = {
        textAlign: 'center',
        position: 'relative',
        bottom: '10px'
    };
    return (
        <div style={ divStyle } ref={imageRef} id="image">
            <h2 style={ headerStyle }>{topCaption}</h2>
            <h2 style={ footerStyle }>{bottomCaption}</h2>
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
