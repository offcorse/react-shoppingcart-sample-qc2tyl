import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import CartItem from './cartitem';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
        items : [
          {quantity: 0, description: 'Bars', id: 1, price: 175.00, lineTotal: 0},
          {quantity: 0, description: 'Bags', id: 2, price: 150.00, lineTotal: 0},
          {quantity: 0, description: 'Pegs', id: 3, price: 75.00, lineTotal: 0},
          
      ],
      cartTotal : 0,
      cartItemsCount : 0
    }
  }

  onIncrementHandler = (item) => {
    var cloneItems = [...this.state.items];
    var index = cloneItems.indexOf(item);
    cloneItems[index].quantity++;
    this.setState({items:cloneItems});

    var cartItemsCount = this.state.cartItemsCount + 1;
    this.setState({cartItemsCount: cartItemsCount});

    var total = this.state.cartTotal + (1 * item.price);
    this.setState({cartTotal: total});
  }

  onDecrementHandler = (item) => {
    var cloneItems = [...this.state.items];
    var index = cloneItems.indexOf(item);
    cloneItems[index].quantity--;
    this.setState({items:cloneItems});

    var cartItemsCount = this.state.cartItemsCount - 1;
    this.setState({cartItemsCount: cartItemsCount});

    var total = this.state.cartTotal - (1 * item.price);
    this.setState({cartTotal: total});
  }

  onResetHandler = () => {
    var cloneItems = [...this.state.items];
     for(var i=0; i<= cloneItems.length-1; i++){
        cloneItems[i].quantity=0;
     }

     this.setState({items:cloneItems});
     this.setState({cartTotal:0});
     this.setState({cartItemsCount:0});
  }

  itemsCount = () => {
    var countItems = this.state.items.reduce((total, item) => (total + item.quantity), 0);
    return countItems;
  }

  cartTotal = () => {
    var total = this.state.items.reduce((total, item) => (total + (item.quantity * item.price)), 0);
    return total;
  }

  componentDidMount = () => {
    var count = this.itemsCount();
    this.setState({cartItemsCount: count});
    var total = this.cartTotal();
    this.setState({cartTotal: total});
  }

  render() {  
    return (
      <div className="cart">  
          <span title="Reset Cart" className="fa fa-times float-right cursor cart-reset" onClick={this.onResetHandler}></span>
          
          <div className="cart-header">
                <span className="badge badge-pill badge-info">Cart items: {this.state.cartItemsCount}</span>
                <span class="badge badge-pill badge-dark">Cart total: ${this.state.cartTotal}</span>
          </div>   
          {
            this.state.items.map(item=> 
              <CartItem 
                key={item.id} 
                item={item}
                onIncrement={this.onIncrementHandler}
                onDecrement={this.onDecrementHandler}
              />
            )
          }      
      </div>
    );
  }
}

export default Cart;