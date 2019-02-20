import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fileSaver from 'file-saver';

class FileSaver extends PureComponent {
  static propTyoes = {
    img: PropTypes.string.isRequired
  }

  saveFile = () => {
    fileSaver.saveAs(this.props.img);
  }
  
  render() {
    return (
      <>
      <img src={this.props.img} />
      <button onClick={this.saveFile}>Save Image</button>
    </> 
    );
  }
}
export default FileSaver;
