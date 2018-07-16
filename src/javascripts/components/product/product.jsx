import React, { Component } from 'react';
import { DiscountBadgeIcon, Button } from 'javascripts/components/components';

export class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product__image">
          <DiscountBadgeIcon className="product__badge" />
          <img
            src="/product-images/product-01-imagem-1000X1000.jpg"
            alt="Produto"
          />
        </div>
        <h2 className="sans-bold product__title">
          Geladeira Frost Free Duplex 500 litros cor Inox com Turbo Control
        </h2>
        <span className="sans-caps product__code">231231</span>
        <small className="sans-normal product__price-from">
          De: <span className="text-dashed">R$ 9.999,99.</span> Por:
        </small>
        <big className="sans-big product__price-to">R$ 2.121,00</big>
        <div className="sans-normal product__payment-forms">
          <b>à vista no boleto bancário</b>
          <br />
          ou até 12x de R$ 999,99
        </div>
        <Button className="product__add">Adicionar ao carrinho</Button>
      </div>
    );
  }
}
