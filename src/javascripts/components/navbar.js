import React from 'react';
import ShoppingCart from 'javascripts/components/shopping-cart';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content navbar__content">
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
