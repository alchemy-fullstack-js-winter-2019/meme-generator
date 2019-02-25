import React from 'react';
import PropTypes from 'prop-types';

function MemeForm({
  header,
  headerColor,
  headerFont,
  footer,
  footerColor,
  footerFont,
  url,
  handleChange
}) {
  return (
    <form>
      <label>
        Header:
        <input type="text" name="header" value={header} onChange={handleChange}></input>
        <input type="color" name="headerColor" value={headerColor} onChange={handleChange}></input>
        <label>Font:
          <input type="text" name="headerFont" value={headerFont} onChange={handleChange}></input>
        </label>
      </label> 
      <label>
        Footer:
        <input type="text" name="footer" value={footer} onChange={handleChange}></input>
        <input type="color" name="footerColor" value={footerColor} onChange={handleChange}></input>
        <label>Font:
          <input type="text" name="footerFont" value={footerFont} onChange={handleChange}></input>
        </label>
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
  headerColor: PropTypes.string,
  headerFont: PropTypes.string,
  footer: PropTypes.string,
  footerColor: PropTypes.string,
  footerFont: PropTypes.string,
  url: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

export default MemeForm;
