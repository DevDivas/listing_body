import React from 'react';
import PropTypes from 'prop-types';

import AmenitiesCategory from './AmenitiesCategory';

const AmenitiesModal = ({ amenities, toggleModal }) => (
  <div className="modal-static">
    <div className="modal">
      <div className="show-modal">
        <div className="round-button" role="button" tabIndex="0" onClick={() => { toggleModal(); }} onKeyPress={() => { toggleModal(); }}>
          &#9587;
        </div>
        <div className="modal-title bold">
          Amenities
        </div>
        {Object.keys(amenities).map(
          category => <AmenitiesCategory categoryName={category} category={amenities[category]} />,
        )}
      </div>
    </div>
  </div>
);

AmenitiesModal.propTypes = {
  amenities: PropTypes.shape({
    Basic: PropTypes.object,
    BedAndbath: PropTypes.object,
    Dining: PropTypes.object,
    Facilities: PropTypes.object,
    GuestAcess: PropTypes.object,
    SafetyFeatures: PropTypes.object,
  }),
  toggleModal: PropTypes.func,
};

AmenitiesModal.defaultProps = {
  amenities: {},
  toggleModal: () => {},
};

export default AmenitiesModal;
