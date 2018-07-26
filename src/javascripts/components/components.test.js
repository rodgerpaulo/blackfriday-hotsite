import React from 'react';
import Banner from './banner';
import SectionTitle from './section-title';
import renderer from 'react-test-renderer';

describe('Render components', () => {
  it('Should render Banner without crash', () => {
    const component = renderer.create(<Banner />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render SectionTitle without highlight', () => {
    const component = renderer.create(<SectionTitle text="My section" />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render SectionTitle with highlight', () => {
    const component = renderer.create(
      <SectionTitle text="My section" highlight="With Highlight" />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
