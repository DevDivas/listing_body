import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../public/styles/houseRules.css';

const HouseRules = ({ rules, showHouseRules, toggleHouseRules }) => (
  <div className="house-rules">
    <h3>
      House Rules
    </h3>
    <div>
      {Object.keys(rules).map(
        (rule, i) => (rules[rule] && rule !== 'id' && rule !== 'Custom message' ? (
          <div key={i}>
            {rules[rule]}
          </div>
        )
          : ''),
      )}
    </div>
    <div className={`readAllRules${showHouseRules}`}>
      {/* {console.log(Object.keys(rules).map(rule => rule === 'Custom message'))} */}
      {rules[Object.keys(rules).filter(rule => rule === 'Custom message')[0]]}
    </div>
    <span role="button" tabIndex="0" className={styles.readMore} onClick={() => { toggleHouseRules(); }} onKeyPress={() => { toggleHouseRules(); }}>
      {
        !showHouseRules
          ? (
            <span className={styles.bold}>
              Read all rules
            </span>)
          : (
            <span className={styles.bold}>
              Hide ^
            </span>
          )
      }
    </span>
    <div className={styles.divider} />
  </div>
);

HouseRules.propTypes = {
  rules: PropTypes.shape({
    CheckIn: PropTypes.string,
    CheckOut: PropTypes.string,
    CustomMessage: PropTypes.string,
    Id: PropTypes.number,
    Pets: PropTypes.string,
    SuitableForChildren: PropTypes.string,
  }),
  showHouseRules: PropTypes.bool,
  toggleHouseRules: PropTypes.func,
};

HouseRules.defaultProps = {
  rules: {},
  showHouseRules: false,
  toggleHouseRules: () => {},
};

export default HouseRules;
