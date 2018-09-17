import React from 'react';
import PropTypes from 'prop-types';
import Highlight from './Highlight';

import styles from '../../public/styles/home-highlights.css';

const HomeHighlights = ({ highlights }) => (
  <div className={styles.homeHighlights}>
    <span className={styles.titleContent}>
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
