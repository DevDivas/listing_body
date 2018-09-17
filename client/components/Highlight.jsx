import React from 'react';
import PropTypes from 'prop-types';

import utility from '../clientHelpers';

import styles from '../../public/styles/home-highlights.css';
import Icon from './Icon';

const Highlight = ({ headline, highlight }) => (
  <div>
    <div className="headline-highlight">
      <span className={styles.headline}>
        {headline}
      </span>
      <span className={styles.leftRightMargin}>
       ·
      </span>
      {highlight}
    </div>
    <div className={styles.helpfulOrNot}>
      <div className={styles.helpful}>
        <span>
          Helpful
        </span>
        <Icon direction={utility.iconCategories.thumbsUp} />
      </div>
      <span className={styles.leftRightMargin}>
       ·
      </span>
      <span className={styles.notHelpful}>
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
