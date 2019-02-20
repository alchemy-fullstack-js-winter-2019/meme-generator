import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


function Controls({ handleChange, memeToImage }) {

    return (
        <Fragment>
            <form onSubmit={memeToImage}>
                <label> TOP CAPTION
                    <input type="text" name="topCaption" onChange={handleChange}/>
                </label>
                <label> BOTTOM CAPTION
                    <input type="text" name="bottomCaption" onChange={handleChange}/>
                </label>
                <label> MEME URL
                    <input type="text" name="url" onChange={handleChange}/>
                </label>
                <label>FONT COLOR
                    <select name="fontColor" onChange={handleChange}>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                    </select>
                </label>
                <button>GENERATE MEME</button>
            </form>
        </Fragment>
    );

}
Controls.propTypes = {
    handleChange: PropTypes.func.isRequired,
    memeToImage: PropTypes.func.isRequired
};

export default Controls;
