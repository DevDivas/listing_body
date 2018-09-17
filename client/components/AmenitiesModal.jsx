import React from 'react';
import PropTypes from 'prop-types';

import AmenitiesCategory from './AmenitiesCategory';

import styles from '../../public/styles/modal.css';

const AmenitiesModal = ({ amenities, toggleModal }) => (
  <div className={styles.modalStatic}>
    <div className={styles.modal}>
      <div className={styles.showModal}>
        <div className={styles.roundButton} role="button" tabIndex="0" onClick={() => { toggleModal(); }} onKeyPress={() => { toggleModal(); }}>
          &#9587;
        </div>
        <div className={styles.modalTitle}>
          Amenities
        </div>
        {Object.keys(amenities).map(
          (category, i) => (
            <AmenitiesCategory key={i} categoryName={category} category={amenities[category]} />
          ),
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
