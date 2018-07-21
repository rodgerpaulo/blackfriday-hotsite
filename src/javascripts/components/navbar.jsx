import React, { Component } from 'react';
import ShoppingCart from 'javascripts/components/shopping-cart';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="content navbar__content">
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
