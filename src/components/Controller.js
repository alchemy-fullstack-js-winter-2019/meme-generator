import React from 'react';
import PropTypes from 'prop-types';

function Controller({ title }) {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
}

Controller.propTypes = {
  title: PropTypes.string.isRequired
};

export default Controller;
