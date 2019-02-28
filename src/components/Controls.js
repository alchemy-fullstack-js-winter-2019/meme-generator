import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.css';

function Controls({ header, headerColor, headerFont, footer, footerColor, footerFont, imgUrl, onChange }) {
  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <label> Header
          <TextControl name="header" text={header} color={headerColor} font={headerFont} onChange={onChange} />
        </label>
      </div>
      <div className={styles.footer}>
        <label>Footer
          <TextControl name="footer" text={footer} color={footerColor} font={footerFont} onChange={onChange} />
        </label>
      </div>
      <div className={styles.url}>
        <label>URL</label>
        <input type="url" name="imgUrl" value={imgUrl} onChange={onChange} />
      </div>
    </form>
  );
}
  
Controls.propTypes = {
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  headerFont: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  footerFont: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function TextControl({ name, text, color, font, onChange }) {
  return (
    <>
      <input type="text" name={name} value={text} onChange={onChange} />
      <input type="color" name={`${name}Color`} value={color} onChange={onChange} />
      <input type="text" name={`${name}Font`} value={font} onChange={onChange} />
    </>
  );
}

TextControl.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;





