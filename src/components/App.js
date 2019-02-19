import React, { Fragment, PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';


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


    handleClick = () => {
        event.preventDefault();
        let counter = this.state.clickCount;
        this.setState({ clickCount: counter + 1 }, () => {
            console.log(this.state.clickCount);
        });
        console.log('IVE BEEN CLICKED');
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
    saveImage = () => {
        fileSaver.saveAs(this.state.img);
    }


    render() {
        const { inputText, formattedText, img } = this.state;


        const fonts = ['Ghost', '3-D', 'Cola'].map(font => {
            return <option key={font} value={font}>{font}</option>;
        });


        return (
            <Fragment>
                <h1>Hello world</h1>
                <form>
                    <button onClick={this.handleClick}>CLICK ME</button>
                    <input name="inputText" type="text" value={inputText} onChange={this.handleChange}/>
                </form>
                <form>
                    <label> SELECT FONT
                        <select name="font" onChange={this.handleChange} value={this.font}>
                            {fonts}
                        </select>
                    </label>
                    <button onClick={this.textToImage}> CLICK TO GENERATE IMAGE</button>
                    <button onClick={this.saveImage}>CLICK TO DOWNLOAD IMAGE</button>
                </form>
                <h2> {inputText} </h2>
                <img src={img}/>
                
                <h2 ref={this.imgRef} id="image"><pre>{formattedText}</pre></h2>
                
            </Fragment>
        );
    }
}

export default App;
