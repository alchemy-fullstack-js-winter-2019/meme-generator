import React from 'react';
import PropTypes from 'prop-types';

function FormatDisplay({ formattedText }) {
  return <h2 ref ={formattedTextRef}<pre></h2>
}

FormatDisplay.propTypes = {
  formattedText: PropTypes.string
}
saveFile = () => {
  fileSaver.saveAs(this.state.img)
}