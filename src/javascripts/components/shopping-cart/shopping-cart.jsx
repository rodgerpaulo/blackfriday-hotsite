import React, { Component } from 'react';
import { object, func } from 'prop-types';
import classNames from 'classnames';
import { formatCurrencyBRL } from 'javascripts/helpers/currency';

import { removeCartItem, updateCartItem } from 'javascripts/actions/products';

import { connect } from 'react-redux';

import {
  ShoppingCartIcon,
  CloseIcon,
  Button
} from 'javascripts/components/components';

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

  handleRemoveCartItem(product) {
    if (product.quantity > 1) {
      this.props.updateCartItem({
        id: product.id,
        price: product.price - product.unitPrice,
        quantity: product.quantity - 1
      });
    } else {
      this.props.removeCartItem(product.id);
    }
    if (this.props.data.byId.length === 1) {
      this.setState({
        ...this.state,
        cartIsOpen: false
      });
    }
  }

  getProductSubtotal() {
    const { data } = this.props;
    let total = 0;

    Object.keys(data.byHash).forEach(item => {
      total = total + data.byHash[item].price;
    });

    return total;
  }

  render() {
    const { cartIsOpen } = this.state;
    const { data } = this.props;
    const itemsCount = data.byId.length || 0;
    const isBadgeVisible = itemsCount;
    const couldShowCart = cartIsOpen && itemsCount;
    const shoppingCartClasses = classNames('shopping-cart', {
      'shopping-cart--open': couldShowCart
    });
    const cartIconColor = couldShowCart ? '#303030' : '#fff';
    const productSubTotal = formatCurrencyBRL(this.getProductSubtotal());

    const renderProducts = data.byId.map((product, index) => (
      <div
        key={index}
        onClick={() => this.handleRemoveCartItem(data.byHash[product])}
        className="shopping-cart-item"
      >
        <div className="shopping-cart-item__image">
          <img
            src={data.byHash[product].image}
            alt={data.byHash[product].description}
          />
        </div>
        <div className="shopping-cart-item__info sans-small">
          <b className="shopping-cart-item__description">
            {data.byHash[product].description}
          </b>
          <div className="shopping-cart-item__quantity">
            quantidade: <b>{data.byHash[product].quantity}</b>
          </div>
        </div>
        <div className="shopping-cart-item__price sans-small">
          <b>{formatCurrencyBRL(data.byHash[product].price)}</b>
        </div>
        <div className="shopping-cart-item__remove">
          <CloseIcon />
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
        {couldShowCart ? (
          <div className="shopping-cart__items">
            <div className="shopping-cart__title sans-bold">Meu carrinho</div>
            {renderProducts}
            <div className="shopping-cart__total sans-bold">
              <span className="shopping-cart__total__legend sans-small">
                Subtotal (frete não incluso):
              </span>
              <span className="shopping-cart__total__value sans-small">
                {productSubTotal}
              </span>
            </div>
            <div className="shopping-cart__buy">
              <Button className="shopping-cart__button" roundedBorder={false}>
                Comprar
              </Button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  data: object,
  removeCartItem: func,
  updateCartItem: func
};

const mapDispachToProps = dispach => {
  return {
    removeCartItem: id => dispach(removeCartItem(id)),
    updateCartItem: product => dispach(updateCartItem(product))
  };
};

const mapStateToProps = data => {
  return { data };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(ShoppingCart);
