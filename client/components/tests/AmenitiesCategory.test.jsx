import React from 'react';
import { shallow } from 'enzyme';

import AmenitiesCategory from '../AmenitiesCategory';

describe('AmenitiesCategory', () => {
  const wrapper = shallow(<AmenitiesCategory />);

  it('should exist', () => {
    expect(wrapper).toExist();
  });
});
