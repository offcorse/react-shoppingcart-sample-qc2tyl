import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class CartItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="alert alert-info">
        <span >{this.props.item.description}</span>
        <button className="btn btn-primary btn-sm float-right" onClick={()=> this.props.onIncrement(this.props.item)} >+</button>
        <button className="btn btn-danger btn-sm ml-2 mr-2 float-right" disabled={this.props.item.quantity===0} onClick={()=> this.props.onDecrement(this.props.item)}  >-</button>
        <button className="btn btn-warning btn-sm float-right">${this.props.item.price * this.props.item.quantity}</button>
        <span className="float-right">=</span>
        <button className="btn btn-secondary ml-2 btn-sm float-right" >${this.props.item.price}</button> 
        <span className="float-right">X</span>
        <button className="btn btn-secondary btn-sm float-right" >{this.props.item.quantity}</button>
      </div>
    );
  }
}

export default CartItem;