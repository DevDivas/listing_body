import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../public/styles/amenities.css';
import main from '../../public/styles/main.css';

const Amenities = ({ amenities, toggleModal }) => (
  <div className={styles.amenities}>
    <div className={styles.amenitiesPreview}>
      {/* {amenities} */}
      {Object.keys(amenities).map(
        (category, i) => (
          <div key={i}>
            <img className={styles.amenityIcon} src={`https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/${category.split(' ').join('-').toLowerCase()}.png`} alt="amenity icon" />
            {category}
          </div>
        ),
      )}
    </div>

    <div className={main.bold}>
      <div role="button" tabIndex="0" className={main.readMore} onClick={() => { toggleModal(); }} onKeyPress={() => { toggleModal(); }}>
        {`Show all ${Object.keys(amenities).reduce((accum, current) => Object.keys(current).length, 0)} amenities`}
      </div>
    </div>

    <div className="divider" />
  </div>
);

Amenities.propTypes = {
  amenities: PropTypes.shape({
    Basic: PropTypes.object,
    BedAndBath: PropTypes.object,
    Dining: PropTypes.object,
    Facilities: PropTypes.object,
    GuestAcess: PropTypes.object,
    SafetyFeatures: PropTypes.object,
  }),
  toggleModal: PropTypes.func,
};

Amenities.defaultProps = {
  amenities: {
    Basic: { amenity: 'amenity' },
    BedAndBath: { amenity: 'amenity' },
    Dining: { amenity: 'amenity' },
    Facilities: { amenity: 'amenity' },
    GuestAcess: { amenity: 'amenity' },
    SafetyFeatures: { amenity: 'amenity' },
  },
  toggleModal: () => { console.log('Error at: toggleModal'); },
};

export default Amenities;
