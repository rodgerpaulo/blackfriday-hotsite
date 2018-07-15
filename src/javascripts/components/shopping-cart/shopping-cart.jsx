import React, { Component } from 'react';
import { ShoppingCartIcon } from 'javascripts/components/components';

export class ShoppingCart extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <span className="shopping-cart__badge sans-bold">0</span>
        <a className="shopping-cart__button" href="#">
          <ShoppingCartIcon color="#fff" />
        </a>
      </div>
    );
  }
}
