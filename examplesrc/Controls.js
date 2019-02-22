

//controls for making meme
function Controls({ header, headerColor, footer, imgUrl, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <TextControl name="header" text={header} color={headerColor} onChance={onChange} />
      <input type="text" name="header" value={header} onChange={onChange}/>
      <input type="text" name="footer" value={footer} onChange={onChange} />
      <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={onChange} />
    </form>
  );
}

Controls.propTypes = {
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired,
};

function TextContorl({ name, text, color, onChange }) {
  return (
    <>
      <input type="text" name={name} value={text} onChange={onChange} />
      <input type="color" name={`${name}Color`} value={colors} onChange={onChange} />
    </>
  );
}

