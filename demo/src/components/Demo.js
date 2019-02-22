import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from ''



export default class Demo extends PureComponent {
  constructor(props) {
    // super calls PureComponents constructor
    super(props);

    this.formattedTextRef = React.createRef();
  }

  state = {
    count: 0,
    text: '',
    formattedText: '',
    font: 'Basic',
    img: ''
  };

  textToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.formattedTextRef.current)
      .then(img => {
        this.setState({ img });
      });
  };

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text,
      { font },
      (err, formattedText) => {
        if(err) return console.error(err);

        this.setState({ formattedText });
      });
  };

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 }, () => {
      console.log('Click', this.state.count);
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };

  render() {
    const { text, formattedText, font, img } = this.state;

    const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Basic', 'Wet'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });

    return (
      <>
        <form onSubmit={this.textToImage}>
          <select name="font" onChange={this.handleChange} value={font}>
            {fontOptions}
          </select>
          <input type="text" name="text" value={text} onChange={this.handleChange} />
          <button type="submit">Create Image</button>
        </form>
        <h1>{text}</h1>
        <h2 ref={this.formattedTextRef}><pre>{formattedText}</pre></h2>
        {img && <img src={img} />}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
// export default class Demo extends PureComponent {
//   state = {
//     count: 0,
//     text: '',
//     formatedText: '',
//     font: 'Goofy'
//   };
//   formatText = () => {
//     const { font } = this.state.font;
//     figlet.text(this.state.text,
//       { font },
//       (err, formatedText) => {
//         if(err) return console.error(err);

//         this.setState({ formatedText });
//       });
//   };

//   handleClick = () => {
//     const { count } = this.state;
//     this.setState({ count: count + 1 }, () => {
//       console.log('Click', this.state.count);
//     });
//   };

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value }, () => {
//       this.formatText();
//     });
//   };


//   render() {
//     const { text, formatedText, font } = this.state;

//     const fontOptions = ['Ghost', 'Wet', 'Wow', 'Varsity', 'Lil Devil'].map(f => {
//       return <option key={f} value={f}>{f}</option>;
//     });

//     return (
//       <>
//         <select name="font" onChange={this.handleChange} value={font}>
//           {fontOptions}
//         </select>
//         <input type="text" name="text" value={text} onChange={this.handleChange} />
//         <h1>{text}</h1>
//         <h2><pre>{formatedText}</pre></h2>
//         <button onClick={this.handleClick}>Click</button>
//       </>
//     );
//   }
// }



// export default class Demo extends PureComponent {
//   //properties dont change/ stat can be updated overtime
//   state = {
//     count: 0,
//     text: ''
//   };
//   handleClick = () => {
//     //without putting teh setState into an arrow function it will be Synchronously and the counter would start at 0 instead of 1
//     const { count } = this.state;
//     this.setState({ count: count + 1 });
//     console.log(count);
    
//     // //when you want to change state use this.setState
//     // this.setState({ count: count + 1, }), () => {
//     //   //whne you want to get stat 
//     //   console.log(this.state.count);

//     // };
//   };

//   // add a text property to state
//   // add an input to App
//   // inputs value should be text
//   // onChange update the state with this.setState
//   // display this.state.text in an h1 below the input box

// handleChange = ({ target }) => {
//   this.setState({ text: target.value });
// };
  
// render() {
//   return (
//       <>
//       <h1>Hi</h1>
//       <input type="text" value={this.state.text} onChange={this.handleChange}></input>
//       <h1></h1>
//       <button onClick={this.handleClick}>click</button>
//       </>
//   );
// }
// }

//functional component 
// function App() {
//   return (
//     <h1>hi</h1>
//   )
// }



