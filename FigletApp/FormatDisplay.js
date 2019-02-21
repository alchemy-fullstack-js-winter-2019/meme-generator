import React from 'react';
import PropTypes from 'prop-types';

function FormatDisplay({ formattedText, formattedTextRef }) {
  return <h1 ref={this.formattedTextRef}><pre>{formattedText}</pre></h1>;
}

FormatDisplay.PropTypes = {
  formattedText: PropTypes.string,
  formattedTextRef: PropTypes.object.isRequired
};

export default FormatDisplay;
