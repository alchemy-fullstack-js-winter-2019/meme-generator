import React from 'react';
import PropTypes from 'prop-types';



function FormatText({ text, handleChange, textToImage, font }) {



    const fonts = ['Ghost', '3-D', 'Cola'].map(font => {
        return <option key={font} value={font}>{font}</option>;
    });

    return (
        <form onSubmit={textToImage}>
            <input name="inputText" type={text} value={text} onChange={handleChange}/>
            <label> SELECT FONT
                <select name="font" onChange={handleChange} value={font}>
                    {fonts}
                </select>
            </label>
            <button type="submit">Create Image</button>

        </form>
    );
}
FormatText.propTypes = {
    text: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    textToImage: PropTypes.func.isRequired,
    font: PropTypes.string.isRequired
};


export default FormatText;
