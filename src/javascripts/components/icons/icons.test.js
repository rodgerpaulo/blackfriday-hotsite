import React from 'react';
import CloseIcon from './close-icon';
import BaseSvg from './base-svg';
import DiscountBadgeIcon from './discount-badge-icon';
import PercentBadgeIcon from './percent-badge-icon';
import ShoppingCartIcon from './shopping-cart-icon';
import renderer from 'react-test-renderer';

describe('Render Icons', () => {
  it('should render BaseSvg without crash', () => {
    const component = renderer.create(
      <BaseSvg width="24" height="24" color="#dddddd" />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render CloseIcon without crash', () => {
    const component = renderer.create(<CloseIcon />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render DiscountBadgeIcon without crash', () => {
    const component = renderer.create(<DiscountBadgeIcon />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render PercentBadgeIcon without crash', () => {
    const component = renderer.create(<PercentBadgeIcon />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render ShoppingCartIcon without crash', () => {
    const component = renderer.create(<ShoppingCartIcon />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
