import React from 'react';
import PropTypes from 'prop-types';

function Controller({ header, onChange }) {
  return (
    <form>
      <TextController name="header" text={header} onChange={onChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

Controller.propTypes = {
  header: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

function TextController({ name, onChange }) {
  return (
    <>
      <input type="text" name={name} onChange={onChange}/>
    </>
  );
}

TextController.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default Controller;
