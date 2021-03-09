import React from 'react';
import { fraction } from 'mathjs';
import './index.css';

export class Add extends React.Component {

  constructor(props) {
    super(props)
    this.confirmAdd = this.confirmAdd.bind(this);
  }

  confirmAdd() {
    try {
      const from = Math.floor( document.getElementById("addFrom").value ) - 1;
      const multiplier = fraction( document.getElementById("addMultiplier").value || 0 );
      const to = Math.floor( document.getElementById("addTo").value ) - 1;
      this.props.action(to, multiplier, from);
      this.props.clear();
    } catch(error) {
      console.log("Add Error", error);
    }
  }

  render() {
    let options = [];
    for(let i = 1; i <= this.props.rowCount; i++) {
      options.push(<option value={i} key={i}>{i}</option>);
    }
      return (
          <div className="inner-text">
              Add row
              <select id='addFrom'>
                {options}
              </select>
              <span>multiplied by</span>
              <input id="addMultiplier" placeholder="0"></input> to row
              <select id='addTo'>
                {options}
              </select>
              <button onClick={this.confirmAdd}>Confirm</button>
          </div>
      )
  }
  
}
