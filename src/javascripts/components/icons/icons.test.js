import React from 'react';
// import ReactDOM from 'react-dom';
import { CloseIcon } from './icons';
import renderer from 'react-test-renderer';

test('Render Icons with default state', () => {
  const component = renderer.create(<CloseIcon />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
