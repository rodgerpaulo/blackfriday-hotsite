import React, { Component } from 'react';
import { getProducts } from 'javascripts/actions/products';
import Navbar from 'javascripts/components/navbar';
import Banner from 'javascripts/components/banner';
import Product from 'javascripts/components/product';
import ProductSection from 'javascripts/layouts/product-section';

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

    if (products.length && featured.length) {
      const renderProducts = products.map(product => (
        <Product key={product.id} product={product} />
      ));

      const renderFeatured = featured.map(product => (
        <Product key={product.id} product={product} />
      ));

      return (
        <div className="App">
          <Navbar />
          <Banner />
          <ProductSection
            text="Seleção de"
            highlight="Geladeiras"
            greyBackground={true}
          >
            {renderFeatured}
          </ProductSection>
          <ProductSection
            text="Os mais vendidos da categoria"
            highlight="Geladeiras"
          >
            {renderProducts}
          </ProductSection>
        </div>
      );
    } else {
      return <div>Loadding...</div>;
    }
  }
}

export default Layout;
