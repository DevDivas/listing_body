import React from 'react';
import { shallow } from 'enzyme';
import HomeHighlights from '../../client/components/HomeHighlights';
import Highlight from '../../client/components/Highlight';

describe('Home Highlights', () => {
  // const headlines = ['Great location', 'Great check-in experience', 'Kitty is a Superhost'];
  // const highlights = ['highlight1', 'highlight2', 'highlight3'];

  const wrapper = shallow(<HomeHighlights />);

  it('should exist', () => {
    expect(wrapper).toExist();
  });

  // it('should have an object property passed to it', () => {
  //   expect(typeof wrapper.props('highlights')).toEqual('object');
  // });

  // it('should have three Highlight components', () => {
  //   expect(wrapper.find(Highlight)).toHaveLength(3);
  // });
});
