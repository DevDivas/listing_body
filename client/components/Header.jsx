import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ listing }) => (
  <div className="header">
    <div className="header-top">

      <div className="header-top-left">

        <div className="house-type">
          <span className="title-content">
            ENTIRE HOUSE
          </span>
        </div>

        <div className="listing-name">
          {listing.name}
        </div>

        <div className="city">
          <a href={`https://www.google.com/maps/search/?api=1&query=${listing.city}%2C${listing.state}`} target="blank">
            {listing.city}
          </a>
        </div>

      </div>

      <div className="header-top-right">
        <div className="host-image-wrap">
          <img className="host-image" alt="host" src={listing.host_image} />
        </div>
        <div className="host-name">
          {listing.host_name}
        </div>
      </div>

    </div>

    <div className="header-bottom">

      <div className="guests" data-guests={listing.guests}>
        <img className="amenity-icon" src="https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/guests.png" alt="guests" />
        <span className="left-right-margin">
          {listing.guests}
        </span>
        guests
      </div>
      <div className="bedrooms" data-beds={listing.beds}>
        <img className="amenity-icon" src="https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/bedroom.png" alt="bedrooms" />
        <span className="left-right-margin">
          {Math.ceil(listing.beds / 2)}
        </span>
        bedrooms
      </div>
      <div className="beds" data-beds={listing.beds}>
        <img className="amenity-icon" src="https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/beds.png" alt="beds" />
        <span className="left-right-margin">
          {listing.beds}
        </span>
        beds
      </div>
      <div className="baths" data-baths={listing.baths}>
        <img className="amenity-icon" src="https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/baths.png" alt="baths" />
        <span className="left-right-margin">
          {listing.baths}
        </span>
        baths
      </div>

    </div>
  </div>
);

Header.propTypes = {
  listing: PropTypes.shape({
    baths: PropTypes.number,
    beds: PropTypes.number,
    city: PropTypes.string,
    description: PropTypes.string,
    guests: PropTypes.number,
    host_image: PropTypes.string,
    host_name: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    state: PropTypes.string,
  }),
};

Header.defaultProps = {
  listing: {},
};

export default Header;
