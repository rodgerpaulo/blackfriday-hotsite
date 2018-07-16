import React, { Component } from 'react';
import { ShoppingCart } from 'javascripts/components/components';

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="content content--right">
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
