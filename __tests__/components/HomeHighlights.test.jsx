import React from 'react';
import { shallow } from 'enzyme';
import HomeHighlights from '../../client/components/HomeHighlights';
import Highlight from '../../client/components/Highlight';

describe('Home Highlights', () => {
  const highlights = [
    { headline: 'SAMPLE HEADLINE', message: 'SAMPLE MESSAGE' },
    { headline: 'SAMPLE HEADLINE2', message: 'SAMPLE MESSAGE2' },
    { headline: 'SAMPLE HEADLINE3', message: 'SAMPLE MESSAGE3' },
  ];

  const wrapper = shallow(<HomeHighlights highlights={highlights} />);

  it('should exist', () => {
    expect(wrapper).toExist();
  });

  it('should have an array as a highlights prop', () => {
    expect(typeof wrapper.props('highlights')).toBe('object');
  });

  it('should have three Highlight components', () => {
    expect(wrapper.find(Highlight)).toHaveLength(3);
  });
});
