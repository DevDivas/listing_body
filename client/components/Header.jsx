import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../public/styles/header.css';

const Header = ({ listing }) => (
  <div className={styles.header}>
    <div className={styles.headerTop}>

      <div className={styles.headerTopLeft}>

        <div className="house-type">
          <span className={styles.titleContent}>
            ENTIRE HOUSE
          </span>
        </div>

        <div className={styles.listingName}>
          {listing.name}
        </div>

        <div className={styles.city}>
          <a href="#location">
            {listing.city}
          </a>
        </div>

      </div>

      <div className={styles.headerTopRight}>
        <div className={styles.hostImageWrap}>
          <img className={styles.hostImage} alt="host" src={listing.host_image} />
        </div>
        <div className={styles.hostName}>
          {listing.host_name}
        </div>
      </div>

    </div>

    <div className={styles.headerBottom}>

      <div className="guests" data-guests={listing.guests}>
        <img className={styles.icon} src="https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/guests.png" alt="guests" />
        <span className="left-right-margin">
          {listing.guests}
        </span>
        {' guests'}
      </div>
      <div className="bedrooms" data-beds={listing.beds}>
        <img className={styles.icon} src="https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/bedroom.png" alt="bedrooms" />
        <span className="left-right-margin">
          {Math.ceil(listing.beds / 2)}
        </span>
        {' bedrooms'}
      </div>
      <div className="beds" data-beds={listing.beds}>
        <img className={styles.icon} src="https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/beds.png" alt="beds" />
        <span className="left-right-margin">
          {listing.beds}
        </span>
        {' beds'}
      </div>
      <div className="baths" data-baths={listing.baths}>
        <img className={styles.icon} src="https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/baths.png" alt="baths" />
        <span className="left-right-margin">
          {listing.baths}
        </span>
        {' baths'}
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
