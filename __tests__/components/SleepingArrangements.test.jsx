import React from 'react';
import { shallow } from 'enzyme';

import SleepingArrangements from '../../client/components/SleepingArrangements';

describe('Sleeping Arrangements', () => {
  const wrapper = shallow(<SleepingArrangements />);

  it('should exist', () => {
    expect(wrapper).toExist();
  });
});
