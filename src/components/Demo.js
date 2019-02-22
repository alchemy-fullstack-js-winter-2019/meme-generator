import React, { Fragment, PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import FormatText from './TextFormatter';
import FormatDisplay from './FormatDisplay';
import FileSaver from './FileSaver';

class App extends PureComponent{
    constructor(props) {
        super(props);

        this.imgRef = React.createRef();
    }

    state = {
        clickCount: 0,
        inputText: '',
        formattedText: '',
        font: 'Ghost',
        img: null
    };

    formatText = () => {
        figlet.text(this.state.inputText, {
            font: this.state.font,
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (err, data) => {
            if(err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            this.setState({ formattedText: data });
        });
    };



    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value }, () => {
            this.formatText();
        });
    };

    textToImage = () => {
        event.preventDefault();
        domToImage.toPng(this.imgRef.current)
            .then(img => {
                this.setState({ img });
            });
    };
    render() {
        const { inputText, formattedText, img, font } = this.state;

        return (
            <Fragment>
                <FormatText
                    text={inputText}
                    font={font}
                    handleChange={this.handleChange}
                    textToImage={this.textToImage}
                />
                <FormatDisplay
                    formattedText={formattedText}
                    imageRef={this.imgRef}
                />
                {img && <FileSaver img={img} />}
                
            </Fragment>
        );
    }
}

export default App;
