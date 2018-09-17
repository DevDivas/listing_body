import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/components/App';

import Header from '../../client/components/Header';
import HomeHighlights from '../../client/components/HomeHighlights';
import Description from '../../client/components/Description';
import Amenities from '../../client/components/Amenities';
import SleepingArrangements from '../../client/components/SleepingArrangements';
import HouseRules from '../../client/components/HouseRules';
import utility from '../../client/utility';

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

  it('formatLines should return a formatted string', () => {
    expect(utility.formatLines('number_of_guests')).toEqual('Number of guests');
  });

  it('collectAmenities should return an object with all amenity props', () => {
    const exampleData = {
      basic: { id: 1, wifi: 0 },
      bed_and_bath: { id: 1, hair_dryer: 0 },
      dining: { id: 1, kitchen: 1 },
      facilities: { id: 1, parking: 1 },
      guest_access: { id: 1, host_greets: 0, lockbox: 1 },
      home_highlights: { id: 1, header1: 'Happy Spot' },
      house_rules: { id: 1, suitable_for_children: 1 },
      listing: { id: 1, name: 'Jubilant Joyful Space' },
      safety_features: { id: 1, fire_extinguisher: 1 },
    };
    const amenitiesList = ['basic', 'facilities', 'guest_access', 'dining', 'bed_and_bath', 'safety_features'];
    expect(Object.keys(utility.collectAmenities(exampleData))).toEqual(amenitiesList);
  });

  it('formatAmenities should return a formatted object', () => {
    const lowerCaseStrings = ['lower_case', 'strings_with_under_score', 'lower', 'case'];
    const expected = ['Lower case', 'Strings with under score', 'Lower', 'Case'];
    expect(lowerCaseStrings.map(
      string => utility.formatLines(string),
    )).toEqual(expected);
  });
});
