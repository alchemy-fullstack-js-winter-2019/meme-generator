import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fileSaver from 'file-saver';
import styles from './css/ImageForm.css';
import domToImage from 'dom-to-image';

export default class ImageForm extends PureComponent {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  static propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired
  };

  saveFile = () => {
    event.preventDefault();
    domToImage.toPng(this.imageRef.current)
      .then(img => {
        fileSaver.saveAs(img);
      });
  };
  render() {
    return (
    <>
      <div className={styles.form} ref={this.imageRef}>
        <h3 className={styles.title}> {this.props.text} </h3>
        <img src={this.props.img}></img>
        <h3 className={styles.footer}> {this.props.footer} </h3> 
      </div>
    <button onClick={this.saveFile}>Save File</button>
    </>
    );
  }
}
