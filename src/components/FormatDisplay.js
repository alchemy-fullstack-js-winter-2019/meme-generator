import React from 'react';
import PropTypes from 'prop-types';


function FormatDisplay({ formattedText, imageRef }) {
    return (
        <h2 ref={imageRef} id="image"><pre>{formattedText}</pre></h2>
    );
}
FormatDisplay.propTypes = {
    formattedText: PropTypes.string,
    imageRef: PropTypes.object.isRequired
};

export default FormatDisplay;
