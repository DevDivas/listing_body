import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header', () => {
  const listing = {
    name: 'Stimulating Happy Destination',
    city: 'Bearcreek',
    host_name: 'Elizabeth',
    guests: 4,
    beds: 2,
    baths: 1,
  };
  const wrapper = shallow(<Header listing={listing} />);

  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have a housing type', () => {
    expect(wrapper.find('.title-content').text()).toBe('ENTIRE HOUSE');
  });

  it('should have a listing name', () => {
    expect(wrapper.find('.listing-name').text()).toBe(listing.name);
  });

  it('should have a city', () => {
    expect(wrapper.find('.city').text()).toBe(listing.city);
  });

  it('should have a host image', () => {
    expect(wrapper.find('.host-image')).toHaveLength(1);
  });

  it('should have the host\'s name', () => {
    expect(wrapper.find('.host-name').text()).toBe(listing.host_name);
  });

  it('should have number of guests greater than zero', () => {
    expect(wrapper.find(`.guests[data-guests=${listing.guests}]`)).toHaveLength(1);
  });

  it('should have number of beds greater than zero', () => {
    expect(wrapper.find(`.beds[data-beds=${listing.beds}]`)).toHaveLength(1);
  });

  it('should have number of baths greater than zero', () => {
    expect(wrapper.find(`.baths[data-baths=${listing.baths}]`)).toHaveLength(1);
  });
});
