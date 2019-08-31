import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    const alfa = (first, last) => {
      let a=[];
      let i = first.charCodeAt(0);
      for (; i<=last.charCodeAt(0); i+=i){
        a.push(String.fromCharCode(i));
      }
      return a;
    };
    this.state = {
      alphabet: alfa('a','z')
    };
  }
  
  render() {
    return (
        <div>
        {this.state.alphabet.map((row, i, arr) => (
            <div>
                {[...arr.slice(i, arr.length), ...arr.slice(0, i)].map((col) => (
                        <span>{col}</span>
                ))}
            </div>
        ))}
        </div>
    );
  }
}

export default Exercise1;
