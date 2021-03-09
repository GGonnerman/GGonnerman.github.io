import React from 'react';
import './index.css';

export class Swap extends React.Component {

  constructor(props) {
    super(props)
    this.confirmSwap = this.confirmSwap.bind(this);
  }

  confirmSwap() {
    const swapA = Math.floor( document.getElementById("swapA").value ) - 1;
    const swapB = Math.floor( document.getElementById("swapB").value ) - 1;
    this.props.action(swapA, swapB);
    this.props.clear();
  }

  render() {
    let options = [];
    for(let i = 1; i <= this.props.rowCount; i++) {
      options.push(<option value={i} key={i}>{i}</option>);
    }
      return (
          <div className="inner-text">
              Swap rows
              <select id='swapA'>
                {options}
              </select>
              <span>and</span>
              <select id='swapB'>
                {options}
              </select>
              <button onClick={this.confirmSwap}>
                Confirm
              </button>
          </div>
      )
  }
}