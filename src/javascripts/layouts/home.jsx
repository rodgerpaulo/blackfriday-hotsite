import React, { Component } from 'react';
import {
  Navbar,
  Banner,
  Product,
  SectionTitle
} from 'javascripts/components/components';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <section className="products products--selection">
          <div className="content">
            <SectionTitle
              className="products__title"
              text="Seleção de"
              highlight="Geladeiras"
            />
            <div className="products-list">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </section>
        <section className="products">
          <div className="content">
            <SectionTitle
              className="products__title"
              text="Os mais vendidos da categoria"
              highlight="Geladeiras"
            />
            <div className="products-list">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Layout;
