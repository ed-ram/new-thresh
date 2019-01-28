import React, { Component } from 'react';
import './App.css';
import { j } from './content/text.js';
const shuff = (x) => {
        let ri = Math.floor(Math.random()*x.length);
        let rj = Math.floor(Math.random()*x.length);
	let parp = x[ri];
	x[ri] = x[rj];
	x[rj] = parp;
        return(x.join('')) 


}


class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
    srcString: "At a surrealist rally in the 1920s Tristan Tzara the man from nowhere proposed to create a poem on the spot by pulling words out of a hat. A riot ensued wrecked the theater. André Breton expelled Tristan Tzara from the movement and grounded the cut-ups on the couch.",
    outputString: "",
    colorIndex: 0,
    colorArray: ['red', 'blue', 'green'],
    stringArray: ['hey'],
    stringIndex: 0
  }  
}
  cut() {
    //console.log('ran')
    let { stringIndex, stringArray, srcString, colorIndex } = this.state;
    
    let strng = stringArray[Math.floor(Math.random()*(stringArray.length))];
    
    let s = strng.split('');

    //let positions = [];
    
    for (let i=0, j=s.length;i<j;i++){
      let r = Math.random();
      if (r>0.999){s[i]=s[i].toUpperCase();}
      if (r<0.001) {
       this.setState({srcString: shuff(s), colorIndex: (colorIndex+1)%2});
        
        }
      };
    const output = s.join('');
    this.setState({outputString: output})
   
  }
  
  componentWillMount() {
    this.setState({stringArray: Object.values(j)})
}

    textFetch(url) {
              fetch(url).then(res => console.log(res)).catch(err => alert(err))
  }  

  componentDidMount() {
    this.interval = setInterval(
    this.cut.bind(this),
    100);
    this.setState({srcString: this.state.stringArray[0]})
    console.log(j);
}

render() {

    return (
      <div className="App" >
        <header className="App-header" style={{color: this.state.colorArray[this.state.colorIndex]}}>
          <code>
          {this.state.outputString}
          </code>
        </header>
      </div>
    );
  }
}

export default App;
