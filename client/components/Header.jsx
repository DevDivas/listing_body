import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="listing-type">
      ENTIRE HOUSE  
    </div>
    <div className="listing-name">
      {props.listingName}
    </div>
    <div className="city">
      {props.city}
    </div>
    <div className="host-image">
      <img src={props.hostImage} />
    </div>
    <div className="host-name">
      {props.hostName}
    </div>
    <div className="guests" data-guests={props.guests}>
      {props.guests} guests
    </div>
    <div className="beds" data-beds={props.beds}>
      {props.beds} beds
    </div>
    <div className="baths" data-baths={props.baths}>
      {props.baths} beds
    </div>
    Header
  </div>
);

export default Header;
