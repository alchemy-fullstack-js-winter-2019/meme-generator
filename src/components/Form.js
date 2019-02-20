import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/App.css';

function Form({ onSubmit, onChange, imgUrl, headerText, footerText, headerColor, footerColor }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>

      <label> IMPORT AN IMAGE FROM THE INTERNETS!
        <input onChange={onChange} type="text" name="imgUrl" value={imgUrl}></input>
      </label>

      <label> ADD HEADER TEXT / COLOR
        <input onChange={onChange} type="text" name="headerText" value={headerText}></input>
        <input onChange={onChange} type="color" name="headerColor" value={headerColor}></input>
      </label>

      <label> ADD FOOTER TEXT / COLOR
        <input onChange={onChange} type="text" name="footerText" value={footerText}></input>
        <input onChange={onChange} type="color" name="footerColor" value={footerColor}></input>
      </label>

      <button type="submit">Save My Meme!</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired
};

export default Form;
