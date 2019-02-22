import React from 'react';
import PropTypes from 'prop-types';

function Controller({ header }) {
  return (
    <form>
      <TextController name="header" text={header}/>
      <button type="submit">Submit</button>
    </form>
  );
}

Controller.propTypes = {
  header: PropTypes.string.isRequired
};

function TextController({ name }) {
  return (
    <>
      <input type="text" name={name}/>
    </>
  );
}

TextController.propTypes = {
  name: PropTypes.string.isRequired
};

export default Controller;
