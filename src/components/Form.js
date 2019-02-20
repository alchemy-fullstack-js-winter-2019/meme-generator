import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/App.css';

function Form({ onSubmit, onChange, imgUrl, headerText, footerText }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>

      <label> IMPORT AN IMAGE FROM THE INTERNETS!
        <input onChange={onChange} type="text" name="imgUrl" value={imgUrl}></input>
      </label>

      <label> ADD SUM HEADER TEXT
        <input onChange={onChange} type="text" name="headerText" value={headerText}></input>
      </label>

      <label> ADD SUM FOOTER TEXT
        <input onChange={onChange} type="text" name="footerText" value={footerText}></input>
      </label>

      <button type="submit">Save My Meme!</button>
    </form>
  );
}

// for color picker add 'color' input and new proptype as well as state for each input - then add props to Form and display in render
// apply style  as style={{ color: headerColor }} in the Form

// Can move the TextControl out of the form
// Add new input for font and all of the other necessary proptypes/props/etc. 
// don't forget that styles - when inline inside react - lose the dash and turn into camelCase 


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired
};

export default Form;
