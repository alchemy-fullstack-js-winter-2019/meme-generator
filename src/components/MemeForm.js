import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function MemeForm({ toImage, handleChange, header, footer, imageUrl }) {
  return (
    <Fragment>
      <h1>Meme Generator</h1>
      <form onSubmit={toImage}>
        <label>
          <span>Header:</span>
          <input type='text' name='header' value={header} onChange={handleChange}></input>
        </label>

        <label>
          <span>Footer:</span>
          <input type='text' name='footer' value={footer} onChange={handleChange}></input>
        </label>

        <label>
          <span>Image Url:</span>
          <input type='text' name='imageUrl' value={imageUrl} onChange={handleChange}></input>
        </label>

        <button type="submit">
          Save Meme
        </button>
      </form>
    </Fragment>
  );
}


MemeForm.propTypes = {
  toImage: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  header: PropTypes.string,
  footer: PropTypes.string,
  imageUrl: PropTypes.string.isRequired
};

export default MemeForm;
