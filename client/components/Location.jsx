import React from 'react';

const Location = ({ city, state }) => (
  <div>
    <iframe title="location" width="600" height="450" frameBorder="0" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC4HWaF2XfAfrWP5RYCC1qT6su7D0dZQ6Y&q=${city}+${state}`} allowFullScreen />
  </div>
);

export default Location;
