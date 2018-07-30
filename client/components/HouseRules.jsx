import React from 'react';
import PropTypes from 'prop-types';

const HouseRules = ({ rules, showHouseRules, toggleHouseRules }) => (
  <div className="house-rules">
    <h3>
      House Rules
    </h3>
    <div>
      {console.log(rules)}
      {Object.keys(rules).map(
        rule => (rules[rule] && rule !== 'id' && rule !== 'Custom message' ? (
          <div>
            {rules[rule]}
          </div>
        )
          : ''),
      )}
    </div>
    <div className={`read-all-rules-${showHouseRules}`}>
      {Object.keys(rules).filter(rule => rule === 'Custom message')}
    </div>
    <span role="button" tabIndex="0" className="read-more" onClick={() => { toggleHouseRules(); }} onKeyPress={() => { toggleHouseRules(); }}>
      {
        !showHouseRules
          ? (
            <span className="bold">
              Read all rules
            </span>)
          : (
            <span className="bold">
              Hide ^
            </span>
          )
      }
    </span>
    <div className="divider" />
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
