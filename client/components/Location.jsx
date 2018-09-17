import React from 'react';
import PropTypes from 'prop-types';
import apiKey from '../../server/apiKey';

const Location = ({ city, state }) => (
  <div id="location">
    {console.log(`${city.split(' ').join('%20')}+${state.split(' ').join('%20')}`)}
    <iframe title="location" width="600" height="450" frameBorder="0" src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${city.split(' ').join('%20')}+${state.split(' ').join('%20')}`} allowFullScreen />
  </div>
);

Location.propTypes = {
  city: PropTypes.string,
  state: PropTypes.string,
};

Location.defaultProps = {
  city: 'Detroit',
  state: 'Michigan',
};

export default Location;
