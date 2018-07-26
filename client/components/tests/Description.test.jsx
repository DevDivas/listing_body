import React from 'react';
import { shallow } from 'enzyme';

import Description from '../Description';

describe('Description', () => {
  const wrapper = shallow(<Description />);
  it('should exist', () => {
    expect(wrapper).toExist();
  });
});
