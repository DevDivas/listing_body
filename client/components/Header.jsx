import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="listing-type">
      ENTIRE HOUSE  
    </div>
    <div className="listing-name">
      Listing Name
    </div>
    <div className="city">
      City
    </div>
    <div className="host-image">
      host-image
    </div>
    <div className="host-name">
      host-name
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
