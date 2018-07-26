import React from 'react';
import PropTypes from 'prop-types';

import AmenitiesCategory from './AmenitiesCategory';

const Amenities = ({ amenities }) => (
  <div className="Amenities">
    {amenities.map(
      category => <AmenitiesCategory categoryName={category[0]} category={category[1]} />,
    )}
  </div>
);

Amenities.propTypes = {
  amenities: PropTypes.array,
  // amenities: PropTypes.array({
  //   basic: PropTypes.object,
  //   facilities: PropTypes.object,
  //   guest_access: PropTypes.object,
  //   dining: PropTypes.object,
  //   bed_and_bath: PropTypes.object,
  //   safety_features: PropTypes.object
  // })
};

Amenities.defaultProps = {
  amenities: [],
};

export default Amenities;
