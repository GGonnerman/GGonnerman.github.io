import React from 'react';
import { fraction } from 'mathjs';
import './index.css';

export class Multiply extends React.Component {

  constructor(props) {
    super(props)
    this.confirmMultiply = this.confirmMultiply.bind(this);
    this.toChange = this.toChange.bind(this);
    this.multiplierChange = this.multiplierChange.bind(this);
    // this.state = {
    //   to: 1,
    //   multiplier: ""
    // }
  }

  toChange(value) {
    this.setState({
      to: value.target.value
    });
  }

  multiplierChange(value) {
    this.setState({
      multiplier: value.target.value
    });
  }

  confirmMultiply() {
    try {
      const to = Math.floor( document.getElementById("multiplyTo").value ) - 1;
      const multiplier = fraction( document.getElementById("multiplyMultiplier").value || 1 );
      this.props.action(to, multiplier);
      this.props.clear();
    }
    catch (error) {
      console.log("Multiply Error", error);
    }
  }

  render() {
    let options = [];
    for(let i = 1; i <= this.props.rowCount; i++) {
      options.push(<option value={i} key={i}>{i}</option>);
    }
      return (
          <div className="inner-text">
              Multiply row
              <select onChange={this.toChange} id='multiplyTo'>
                {options}
              </select>
              <span>by</span>
              <input onChange={this.multiplierChange} id="multiplyMultiplier" placeholder="1"></input>
              <button onClick={this.confirmMultiply}>
                Confirm
              </button>
          </div>
      )
  }
  
}
