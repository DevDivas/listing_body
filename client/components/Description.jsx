import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ descriptionBody }) => (
  <div className="Description">
    {descriptionBody}
  </div>
);

Description.defaultProps = {
  descriptionBody: 'FILL IN DESCRIPTION',
};

Description.propTypes = {
  descriptionBody: PropTypes.string,
};

export default Description;
