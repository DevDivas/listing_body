import React from 'react';
import { shallow } from 'enzyme';

import AmenitiesModal from '../AmenitiesModal';
import AmenitiesCategory from '../AmenitiesCategory';

describe('AmenitiesModal', () => {
  const wrapper = shallow(<AmenitiesModal />);

  it('should exist', () => {
    expect(wrapper).toExist();
  });

  it('should contain an AmenitiesCategory component', () => {
    expect(wrapper.find(AmenitiesCategory)).toBeTruthy();
  });
});
