import React from 'react';
import PropTypes from 'prop-types';

function Controls({ header, footer, imgUrl, onChange, onSubmit }) {
  return (
    <form className={styles.styles} onSubmit= {this.textToImage}>
      <div>
        <label>Header</label>
        <input type="text" name="header" value={header} onChange={this.handleChange} />
      </div>
      <div>
        <label>URL</label>
        <input type="text" name="imgUrl" value={imgUrl} onChange={this.handleChange} />
      </div>
      <div>
        <label>Footer</label>
        <input type="text" name="footer" value={footer} onChange={this.handleChange} />
      </div>
      <h1>{header}</h1>
      {imgUrl && <imgUrl src={imgUrl} />}
      {imgUrl && <button onClick={this.saveFile}>Save File</button>}
     <h2>{footer}</h2> */}
    </form>
  );

Controls.PropTypes = {
  header.PropTypes.string.isRequired,
  footer.PropTypes.string.isRequired,
  header.PropTypes.string.isRequired,
  header.PropTypes.string.isRequired,

}
