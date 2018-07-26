import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header', () => {
  const numberOfGuests = Math.floor(Math.random() * (6 - 1)) + 1;
  const numberOfBeds = Math.floor(Math.random() * (6 - 1)) + 1;
  const numberOfBaths = Math.floor(Math.random() * (6 - 1)) + 1;

  const listingName = 'Stimulating Happy Destination';
  const city = 'Bearcreek';
  const hostName = 'Elizabeth';

  const wrapper = shallow(<Header
    listingName={listingName}
    city={city}
    hostName={hostName}
    guests={numberOfGuests}
    beds={numberOfBeds}
    baths={numberOfBaths}
  />);

  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have a housing type', () => {
    expect(wrapper.find('.listing-type').text()).toBe('ENTIRE HOUSE');
  });

  it('should have a listing name', () => {
    expect(wrapper.find('.listing-name').text()).toBe(listingName);
  });

  it('should have a city', () => {
    expect(wrapper.find('.city').text()).toBe(city);
  });

  it('should have a host image', () => {
    expect(wrapper.find('.host-image')).toHaveLength(1);
  });

  it('should have the host\'s name', () => {
    expect(wrapper.find('.host-name').text()).toBe(hostName);
  });

  it('should have number of guests greater than zero', () => {
    expect(wrapper.find(`.guests[data-guests=${numberOfGuests}]`)).toHaveLength(1);
  });

  it('should have number of beds greater than zero', () => {
    expect(wrapper.find(`.beds[data-beds=${numberOfBeds}]`)).toHaveLength(1);
  });

  it('should have number of baths greater than zero', () => {
    expect(wrapper.find(`.baths[data-baths=${numberOfBaths}]`)).toHaveLength(1);
  });
});
