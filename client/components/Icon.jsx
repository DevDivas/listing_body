import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../public/styles/icon.css';

const Icon = ({ direction }) => (
  // <div className="icon">
  <div className={styles.svg}>
    <svg className="svg" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
      <path d={direction} fillRule="evenodd" />
    </svg>
  </div>
);

Icon.propTypes = {
  direction: PropTypes.string,
};

Icon.defaultProps = {
  direction: 'NOT A DIRECTION',
};

export default Icon;
