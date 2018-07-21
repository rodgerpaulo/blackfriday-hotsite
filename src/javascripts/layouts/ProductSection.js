import React from 'react';
import { string, bool } from 'prop-types';
import classNames from 'classnames';
import { SectionTitle } from 'javascripts/components/components';

const ProductSection = props => {
  const { text, highlight, greyBackground, children } = props;
  const classes = classNames('products', {
    'products--selection': greyBackground
  });
  return (
    <section className={classes}>
      <div className="content">
        <SectionTitle
          className="products__title"
          text={text}
          highlight={highlight}
        />
        <div className="products-list">{children}</div>
      </div>
    </section>
  );
};

ProductSection.propTypes = {
  text: string.isRequired,
  highlight: string,
  greyBackground: bool
};

ProductSection.defaultProps = {
  highlight: '',
  greyBackground: false
};

export default ProductSection;
