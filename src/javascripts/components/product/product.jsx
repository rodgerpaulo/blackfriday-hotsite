import React, { Component } from 'react';

export class Product extends Component {
  render() {
    return (
      <div className="product">
        <img src="" alt="Produto" />
        <h2 className="product__title">Geladeira</h2>
        <span className="product__code">231231</span>
        <small className="product__price-from">
          De: <span className="text-dashed">R$ 9.999,99.</span> Por:
        </small>
        <big className="product__price-to">R$ 2.121,00</big>
        <div className="product__payment-forms">
          <b>à vista no boleto bancário</b>
          <br />
          ou até 12x de R$ 999,99
        </div>
      </div>
    );
  }
}
