import React, { Component } from 'react';
import { object } from 'prop-types';
import * as classNames from 'classnames';

import { connect } from 'react-redux';

import { ShoppingCartIcon, Button } from 'javascripts/components/components';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cartIsOpen: false
    };
  }

  groupCartItems(cartItems) {
    this.sta;
  }

  handleOpenCartClick() {
    this.setState(...this.state, { cartIsOpen: !this.state.cartIsOpen });
  }

  render() {
    const { cartIsOpen } = this.state;
    const { data } = this.props;
    const itemsCount = data.byId.length || 0;
    const isBadgeVisible = itemsCount;
    const shoppingCartClasses = classNames('shopping-cart', {
      'shopping-cart--open': cartIsOpen
    });
    const cartIconColor = cartIsOpen ? '#303030' : '#fff';

    const renderProducts = data.byId.map((product, index) => (
      <div key={index} className="shopping-cart-item">
        <img
          className="shopping-cart-item__image"
          src={data.byHash[product].image}
          alt=""
        />
        <div className="shopping-cart-item__description">
          {data.byHash[product].description}
        </div>
      </div>
    ));

    return (
      <div className={shoppingCartClasses}>
        <div
          onClick={this.handleOpenCartClick.bind(this)}
          className="shopping-cart__inner"
        >
          {isBadgeVisible ? (
            <span className="shopping-cart__badge sans-bold">{itemsCount}</span>
          ) : (
            ''
          )}
          <ShoppingCartIcon color={cartIconColor} />
        </div>
        {cartIsOpen ? (
          <div className="shopping-cart__items">
            <div className="shopping-cart__title">Meu carrinho</div>
            {itemsCount ? renderProducts : ''}
            <Button>Comprar</Button>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  data: object
};

const mapStateToProps = data => {
  return { data };
};

export default connect(mapStateToProps)(ShoppingCart);
