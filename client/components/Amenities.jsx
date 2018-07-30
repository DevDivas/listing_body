import React from 'react';
import PropTypes from 'prop-types';

const Amenities = ({ amenities, toggleModal }) => (
  <div className="amenities">
    <div className="amenities-preview">
      {Object.keys(amenities).map(
        category => (
          <div>
            <img className="amenity-icon" src={`https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/${category.split(' ').join('-').toLowerCase()}.png`} alt="amenity icon" />
            {category}
          </div>
        ),
      )}
    </div>

    <div className="amenities-show-more bold">
      <div role="button" tabIndex="0" className="read-more" onClick={() => { toggleModal(); }} onKeyPress={() => { toggleModal(); }}>
        {`Show all ${Object.keys(amenities).reduce((accum, current) => Object.keys(current).length, 0)} amenities`}
      </div>
    </div>

    <div className="divider" />
  </div>
);

Amenities.propTypes = {
  amenities: PropTypes.object,
  toggleModal: PropTypes.func,
};

Amenities.defaultProps = {
  amenities: {},
  toggleModal: () => {},
};

export default Amenities;
