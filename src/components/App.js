import React, { Fragment, PureComponent } from 'react';
import figlet from 'figlet';

class App extends PureComponent{
    state = {
        clickCount: 0,
        inputText: null,
        formattedText: null
    };
    handleClick = () => {
        event.preventDefault();
        let counter = this.state.clickCount;
        counter++;
        this.setState({ clickCount: counter++ });
        console.log(counter);
        console.log('IVE BEEN CLICKED');
    };
    formatText = () => {
        let goodData = null;
        figlet.text(this.state.inputText, {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function(err, data) {
            if(err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            goodData = data;
            console.log(data);
        });

        
        this.setState({ formattedText: goodData });
    };
    handleChange = (event) => {
        this.setState({ inputText: event.target.value });
        this.setState({ formattedText: event.target.value });
        this.formatText();

    };

    render() {
        const { inputText, formattedText } = this.state;
        return (
            <Fragment>
                <h1>Hello world</h1>
                <form>
                    <button onClick={this.handleClick}>CLICK ME</button>
                    <input type="text" value={inputText} onChange={this.handleChange}/>
                </form>
                <h2> {inputText} </h2>
                <h2> {formattedText} </h2>
            </Fragment>
        );
    }
}

export default App;
