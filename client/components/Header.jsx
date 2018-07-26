import React from 'react';

const Header = ({ listingName, city, hostImage, hostName, guests, beds, baths }) => (
  <div className="header">
    <div className="listing-type">
      ENTIRE HOUSE
    </div>
    <div className="listing-name">
      {listingName}
    </div>
    <div className="city">
      {city}
    </div>
    <div className="host-image">
      <img alt="host" src={hostImage} />
    </div>
    <div className="host-name">
      {hostName}
    </div>
    <div className="guests" data-guests={guests}>
      {guests} guests
    </div>
    <div className="beds" data-beds={beds}>
      {beds} beds
    </div>
    <div className="baths" data-baths={baths}>
      {baths} beds
    </div>
    Header
  </div>
);

export default Header;
