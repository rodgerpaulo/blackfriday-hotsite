import React from 'react';
import ProductSection from './ProductSection';
import renderer from 'react-test-renderer';

test('Render Product Section without highlight', () => {
  const component = renderer.create(<ProductSection text="Products" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Product Section with highlight', () => {
  const component = renderer.create(
    <ProductSection text="Most viewed" highlight="Products" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Product Section with highlight and grey background', () => {
  const component = renderer.create(
    <ProductSection
      text="Most viewed"
      highlight="Products"
      greyBackground={true}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
