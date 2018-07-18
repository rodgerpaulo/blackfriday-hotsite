import React, { Component } from 'react';
import { getProducts } from 'javascripts/actions/products';
import {
  Navbar,
  Banner,
  SectionTitle
} from 'javascripts/components/components';

import Product from 'javascripts/components/product/product';

class Layout extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      featured: []
    };
  }

  componentDidMount() {
    getProducts()
      .then(response => response.json())
      .then(data => {
        // set products state
        this.setState({ ...this.state, products: data.products });

        // also set featured items
        const featured = this.state.products.slice(0, 4);
        this.setState({ ...this.state, featured });
      });
  }

  render() {
    const { products, featured } = this.state;

    const renderProducts = products.length
      ? products.map(product => <Product key={product.id} product={product} />)
      : false;

    const renderFeatured = featured.length
      ? featured.map(product => <Product key={product.id} product={product} />)
      : false;

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
              {renderFeatured ? renderFeatured : ''}
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
              {renderProducts ? renderProducts : ''}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Layout;
