import React from 'react';
import { shallow } from 'enzyme';

import HouseRules from '../HouseRules';

describe('House Rules', () => {
  const wrapper = shallow(<HouseRules />);

  it('should exist', () => {
    expect(wrapper).toExist();
  });
});
