import React from 'react';
import PropTypes from 'prop-types';

const AmenitiesCategory = ({ category, categoryName }) => (
  <div className="category">
    <div className="category-name">
      <span className="font-lvl-0">
        {categoryName}
      </span>
    </div>
    <div>
      {Object.keys(category).map(
        amenity => (category[amenity] === amenity && amenity !== 'Id'
          ? (
            <div className="no-bullet">
              <div className="amenity">
                <span className="font-lvl-1">
                  {amenity}
                </span>
              </div>
              <div className="divider" />
            </div>
          )
          : (
            <div className="no-bullet">
              <div className="amenity">
                <span className="font-lvl-1">
                  {amenity}
                </span>
              </div>
              <div className="amenity-description">
                <span className="font-lvl-2">
                  {category[amenity]}
                </span>
              </div>
              <div className="divider" />
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
