import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../public/styles/descriptions.css';

const Description = ({ descriptionBody, toggle, showDescription }) => (
  <div className="description">

    <div className="descriptionTop">
      {descriptionBody.split('.').slice(0, 5).join('.')}
    </div>

    <div className={`descriptionBottom${showDescription}`}>
      {descriptionBody.split('\n').map(
        (par, i) => (
          <p key={i}>
            {par}
          </p>
        ),
      )}
    </div>

    <span role="button" tabIndex="0" className={styles.readMore} onClick={() => { toggle(); }} onKeyPress={() => { toggle(); }}>
      {
        showDescription
          ? (
            <span className={styles.topBottomPadding}>
              Read more about the space
            </span>)
          : (
            <span className={styles.topBottomPadding}>
              Hide ^
            </span>
          )
      }
    </span>

    <div className={`${styles.readMore} ${styles.topBottomPadding}`}>
      Contact Host
    </div>

    <div className={styles.divider} />
  </div>
);

Description.propTypes = {
  descriptionBody: PropTypes.string,
  toggle: PropTypes.func,
  showDescription: PropTypes.bool,
};

Description.defaultProps = {
  descriptionBody: 'FILL IN DESCRIPTION',
  toggle: () => { console.log('no toggle function'); },
  showDescription: false,
};

export default Description;
