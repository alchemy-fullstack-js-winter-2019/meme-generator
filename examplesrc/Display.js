function Display({ memeRef, header, headerColor, footer, footerColor, imgUrl }) {
  const headerStyle = {
    color: headerColor,
    fontFamily: headerFont
  };
  
  return(
    <div ref={memeRef}>
      <h2 style={{ color: headerColor }}>{header}</h2>
      <img src={imgUrl} />
      <h2 style={{ color: footerColor }}>{footer}</h2>
      </div>
  );
}

DisplayMeme.propTypes = {
  memRef: PropTypes.object.isRequired,

  header:

}