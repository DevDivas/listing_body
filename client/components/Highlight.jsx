import React from 'react';
import PropTypes from 'prop-types';

const Highlight = ({ headline, highlight }) => (
  <div className="highlight">
    <div className="headline-highlight">
      <span className="headline bold">
        {headline}
      </span>
      <span className="left-right-margin">
       ·
      </span>
      {highlight}
    </div>
    <div className="helpful-not">
      <span className="helpful">
        Helpful
        <img className="amenity-icon thumbs-up" src="https://s3-us-west-1.amazonaws.com/listing-body-component/amenities/thumbs-up.png" alt="thumbs up" />
      </span>
      <span className="left-right-margin">
       ·
      </span>
      <span className="not-helpful">
        Not helpful
      </span>
    </div>
  </div>
);

Highlight.propTypes = {
  headline: PropTypes.string,
  highlight: PropTypes.string,
};

Highlight.defaultProps = {
  headline: 'HEADLINE',
  highlight: 'HIGHLIGHT',
};

export default Highlight;
