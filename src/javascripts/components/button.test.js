import React from 'react';
import Button from './button';
import renderer from 'react-test-renderer';

test('Render Button with rounded border', () => {
  const component = renderer.create(<Button>click me!</Button>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Button without rounded border', () => {
  const component = renderer.create(
    <Button roundedBorder={false}>click me!</Button>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Button with type submit', () => {
  const component = renderer.create(<Button type="submit">Submit form</Button>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
