import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../public/styles/modal.css';
import main from '../../public/styles/main.css';

const AmenitiesCategory = ({ category, categoryName }) => (
  <div className="category">
    <div className={styles.categoryName}>
      <span className={styles.font0}>
        {categoryName}
      </span>
    </div>
    <div>
      {Object.keys(category).map(
        (amenity, i) => (category[amenity] === amenity && amenity !== 'Id'
          ? (
            <div key={i} className="no-bullet">
              <div className="amenity">
                <span className={styles.font1}>
                  {amenity}
                </span>
              </div>
              <div className={main.divider} />
            </div>
          )
          : (
            <div key={i} className="no-bullet">
              <div className="amenity">
                <span className={styles.font1}>
                  {amenity}
                </span>
              </div>
              <div className="amenity-description">
                <span className="font-lvl-2">
                  {category[amenity]}
                </span>
              </div>
              <div className={main.divider} />
            </div>
          )),
      )}
    </div>
  </div>
);

AmenitiesCategory.propTypes = {
  categoryName: PropTypes.string,
  category: PropTypes.object,
};

AmenitiesCategory.defaultProps = {
  categoryName: 'FILL CATEGORY NAME',
  category: {},
};

export default AmenitiesCategory;
