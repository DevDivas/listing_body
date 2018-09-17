import React from 'react';
import PropTypes from 'prop-types';
import apiKey from '../../keys/googleMapsEmbedKey';

const Location = ({ city, state }) => (
  <div id="location">
    {console.log(`${city}+${state}`)}
    <iframe title="location" width="600" height="450" frameBorder="0" src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${city}+${state}`} allowFullScreen />
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
