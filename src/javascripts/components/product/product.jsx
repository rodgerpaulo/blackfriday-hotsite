import React, { Component } from 'react';
import { DiscountBadgeIcon, Button } from 'javascripts/components/components';
import { func, object } from 'prop-types';
import { getFirstImageUrl } from 'javascripts/helpers/product';
import { formatCurrencyBRL } from 'javascripts/helpers/currency';

import { connect } from 'react-redux';
import { addToCart, updateCartItem } from 'javascripts/actions/products';

class Product extends Component {
  constructor() {
    super();

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  getProductImageSrc(product) {
    return getFirstImageUrl(product);
  }

  handleAddToCart(product) {
    const productItem = product.items[0];
    const productId = product.id;
    const productPrice = productItem.Price;
    const { data } = this.props;
    const cartProduct = data.byHash[productId];

    if (cartProduct) {
      const cartProductQuantity = cartProduct.quantity + 1;
      this.props.updateCartItem({
        id: productId,
        price: productPrice + cartProduct.price,
        quantity: cartProductQuantity
      });
    } else {
      this.props.addToCart({
        id: productId,
        price: productPrice,
        image: this.getProductImageSrc(product),
        description: product.productName,
        quantity: 1
      });
    }
  }

  render() {
    const { product } = this.props;
    const productItem = product.items[0];
    const priceInTwelve = productItem.ListPrice / 12;

    return (
      <div className="product">
        <div className="product__image">
          <DiscountBadgeIcon className="product__badge" />
          <img src={this.getProductImageSrc(product)} alt="Produto" />
        </div>
        <h2 className="sans-bold product__title">{product.productName}</h2>
        <span className="sans-caps product__code">
          {product.productReference}
        </span>
        <small className="sans-normal product__price-from">
          De:{' '}
          <span className="text-dashed">
            {formatCurrencyBRL(productItem.PriceWithoutDiscount)}.
          </span>{' '}
          Por:
        </small>
        <big className="sans-big product__price-to">
          {formatCurrencyBRL(productItem.Price)}
        </big>
        <div className="sans-normal product__payment-forms">
          <b>à vista no boleto bancário</b>
          <br />
          ou até 12x de {formatCurrencyBRL(priceInTwelve)}
        </div>
        <Button
          onClick={() => this.handleAddToCart(product)}
          className="product__add"
        >
          Adicionar ao carrinho
        </Button>
      </div>
    );
  }
}

Product.propTypes = {
  addToCart: func,
  updateCartItem: func,
  product: object,
  data: object
};

const mapDispachToProps = dispach => {
  return {
    addToCart: product => dispach(addToCart(product)),
    updateCartItem: productInfo => dispach(updateCartItem(productInfo))
  };
};

const mapStateToProps = data => {
  return { data };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Product);
