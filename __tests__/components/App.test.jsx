import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/components/App';

import Header from '../../client/components/Header';
import HomeHighlights from '../../client/components/HomeHighlights';
import Description from '../../client/components/Description';
import Amenities from '../../client/components/Amenities';
import SleepingArrangements from '../../client/components/SleepingArrangements';
import HouseRules from '../../client/components/HouseRules';
import utility from '../../client/clientHelpers';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should exist', () => {
    expect(wrapper).toExist();
  });

  it('should have a Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should have a Home Highlights component', () => {
    expect(wrapper.find(HomeHighlights)).toHaveLength(1);
  });

  it('should have a Description component', () => {
    expect(wrapper.find(Description)).toHaveLength(1);
  });

  it('should have a Amenities component', () => {
    expect(wrapper.find(Amenities)).toHaveLength(1);
  });

  it('should have a Sleeping Arrangements component', () => {
    expect(wrapper.find(SleepingArrangements)).toHaveLength(1);
  });

  it('should have a House Rules component', () => {
    expect(wrapper.find(HouseRules)).toHaveLength(1);
  });
});
