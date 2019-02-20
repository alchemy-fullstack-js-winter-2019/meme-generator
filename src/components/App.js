import React, { Fragment, PureComponent } from 'react';
import Controls from './Controls';
import Meme from './Meme';
import domToImage from 'dom-to-image';
import FileSaver from './FileSaver';

class App extends PureComponent{
    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
    }
    state = {
        url: '',
        topCaption: '',
        bottomCaption: '',
        meme: null

    };
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value }, () => {
            console.log(this.state);
        });
    };
    memeToImage = () => {
        event.preventDefault();
        domToImage.toPng(this.imgRef.current)
            .then(meme => {
                this.setState({ meme });
            });
    };

    render() {
        const { bottomCaption, topCaption, url, meme } = this.state;
        return (
            <Fragment>
                <h1>HELLO WORLD</h1>
                <Controls
                    handleChange={this.handleChange}
                    memeToImage={this.memeToImage}
                />


                <Meme
                    bottomCaption={bottomCaption}
                    topCaption={topCaption}
                    url={url}
                    imageRef={this.imgRef}

                />
                {meme && <FileSaver meme={meme} />}
            </Fragment>
        );
    }
}
export default App;
