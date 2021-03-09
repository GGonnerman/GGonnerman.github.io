import React from 'react';
import './index.css';

export class MatrixSquare extends React.Component {

  componentWillMount() {
    this.update = this.update.bind(this);
    this.click = this.click.bind(this);
  }

  update(event) {
    this.props.update(this.props.row, this.props.column, event.target.value);
  }

  click() {
    if(!this.props.onClick) return;
    this.props.onClick(this.props.pos);
  }

  render() {
    if(this.props.frozen) {
      return (
        <input id={this.props.id} tabIndex="-1" onClick={this.click} style={{backgroundColor: this.props.color, textAlign: "center", height: 2 + "em", width: 3 + "em"}} onChange={this.update} value={this.props.value} className="matrixSquare"></input>
      );
    } else {
      return (
        <input id={this.props.id} onClick={this.click} style={{backgroundColor: this.props.color, textAlign: "center", height: 2 + "em", width: 3 + "em"}} onChange={this.update} value={this.props.value} className="matrixSquare"></input>
      );
    }
  }

}
