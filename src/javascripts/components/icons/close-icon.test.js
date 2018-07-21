import React from 'react';
import CloseIcon from './close-icon';
import renderer from 'react-test-renderer';

test('Render Icons with default state', () => {
  const component = renderer.create(<CloseIcon />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
