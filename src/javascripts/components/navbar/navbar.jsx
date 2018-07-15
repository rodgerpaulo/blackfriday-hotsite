import React, { Component } from 'react';
import { ShoppingCart } from 'javascripts/components/components';

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="content">
          <div className="shopping-cart">
            <span className="shopping-cart__badge">0</span>
            <a className="shopping-cart__button" href="#">
              <ShoppingCart color="#fff" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
