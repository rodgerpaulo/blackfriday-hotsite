import React, { Component } from 'react';
import { Navbar, Banner, Product } from 'javascripts/components/components';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <section className="products products--selection">
          <h1 className="products__title">
            Seleção de <b className="products__highlight">Geladeiras</b>
          </h1>
          <Product />
        </section>
      </div>
    );
  }
}

export default Layout;
