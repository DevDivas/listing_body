import React from 'react';
import { shallow } from 'enzyme';

import Amenities from '../../client/components/Amenities';

describe('Amenities', () => {
  const wrapper = shallow(<Amenities />);

  it('should exist', () => {
    expect(wrapper).toExist();
  });
});
