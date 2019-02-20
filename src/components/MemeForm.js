import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function MemeForm({ toImage, handleChange, header, footer, imageUrl, headerColor, footerColor }) {
  return (
    <Fragment>
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
          <input type='url' name='imageUrl' value={imageUrl} onChange={handleChange}></input>
        </label>

        <label>
          <span>Header Color:</span>
          <input type='color' name='headerColor' value={headerColor} onChange={handleChange}></input>
        </label>

        <label>
          <span>Footer Color:</span>
          <input type='color' name='footerColor' value={footerColor} onChange={handleChange}></input>
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
  imageUrl: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired
};

export default MemeForm;
