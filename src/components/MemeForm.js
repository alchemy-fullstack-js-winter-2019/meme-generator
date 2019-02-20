import React from 'react';
import PropTypes from 'prop-types';

function MemeForm({
  header,
  footer,
  url,
  handleChange
}) {
  return (
    <form>
      <label>
              Header:
        <input type="text" name="header" value={header} onChange={handleChange}></input>
      </label> 
      <label>
              Footer:
        <input type="text" name="footer" value={footer} onChange={handleChange}></input>
      </label>
      <label>
              Photo Url:
        <input type="url" name="url" value={url} onChange={handleChange}></input>
      </label>
    </form>
  );
}

MemeForm.propTypes = {
  header: PropTypes.string,
  footer: PropTypes.string,
  url: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

export default MemeForm;
