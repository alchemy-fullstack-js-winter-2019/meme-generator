import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fileSaver from 'file-saver';


export default class FileSaver extends PureComponent () {
  static protoTypes = {
    img: PropTypes.string.isRequired,
  };

  saveImgFile = () => {
    fileSaver.saveAs(this.props.img);
  }

  render() {
    return (
      <>
      <img src={this.props.img} />,
      <button onClick={this.saveImgFile}>Download Meme</button>
      </>
    );
  }
  
}
