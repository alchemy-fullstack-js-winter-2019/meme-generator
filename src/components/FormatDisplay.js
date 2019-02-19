import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/App.css';

function FormatDisplay({ formattedText }) {
  return (
    <h2 id="formattedText" className={styles.formattedText}>
      <pre>
        {formattedText}
      </pre>
    </h2>
  );
}

FormatDisplay.propTypes = {
  formattedText: PropTypes.string
};

export default FormatDisplay;
