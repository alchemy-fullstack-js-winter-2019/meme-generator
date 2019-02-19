import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import fileSaver from 'file-saver';


class FileSaver extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired
  }

  saveFile = () => {
    fileSaver.saveAs(this.props.img);
  }

  render() {
    return (
      <Fragment>
        <img src={this.props.img}/>
        <button onClick={this.saveFile}>Save Image</button>
      </Fragment>
    );
  }
}


export default FileSaver;
