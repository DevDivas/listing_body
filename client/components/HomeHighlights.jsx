import React from 'react';
import PropTypes from 'prop-types';
import Highlight from './Highlight';

const HomeHighlights = ({ highlights }) => (
  <div className="home-highlights">
    <span className="title-content">
      HOME HIGHLIGHTS
    </span>
    {
    highlights.map(
      (obj, i) => <Highlight key={i} headline={obj.headline} highlight={obj.message} />,
    )
    }
  </div>
);

HomeHighlights.propTypes = {
  highlights: PropTypes.array,
};

HomeHighlights.defaultProps = {
  highlights: [],
};

export default HomeHighlights;
