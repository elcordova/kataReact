import React, {Component} from 'react';

class Exercise2 extends Component {
  constructor(props) {
    super(props);
    const alfa = (first, last) => {
      let a=[], i = first.charCodeAt(0);
      for (; i<=last.charCodeAt(0); i++ ){
        a.push(String.fromCharCode(i))
      }
      return a;
    };
    this.state = {
      alphabet: alfa('a','z'),
      value: ''
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="container">
        Exercise2 page

      <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <span>{this.state.value}</span>
      </form>
    </div>
    );
  }
}

export default Exercise2;
