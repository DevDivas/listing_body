import React, { Component } from 'react';

import Header from './Header';
import HomeHighlights from './HomeHighlights';
import Description from './Description';
import Amenities from './Amenities';
import SleepingArrangements from './SleepingArrangements';
import HouseRules from './HouseRules';

const axios = require('axios');

class App extends Component {
  constructor() {
    super();
    this.state = {
      listing: {},
      homeHighlights: {},
      amenities: [],
      houseRules: {},
    };
  }

  componentDidMount() {
    axios.get('/rooms/1')
      .then((res) => {
        const data = res.data;
        const {basic, facilities, guest_access, dining, bed_and_bath, safety_features} = data;
        const {header1, header2, header3} = data.home_highlights;
        const {highlight1, highlight2, highlight3} = data.home_highlights;
        this.setState({
          listing: data.listing,
          homeHighlights: {
            headlines: [header1, header2, header3],
            highlights: [highlight1, highlight2, highlight3],
          },
          amenities: [
            ['Basic', basic],
            ['Facilities', facilities],
            ['Guest Access', guest_access],
            ['Dining', dining],
            ['Bed and Bath', bed_and_bath],
            ['Safety Features', safety_features]
          ],
        });
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <HomeHighlights homeHighlights={this.state.homeHighlights} />
        <Description description={this.state.listing.description} />
        <Amenities amenities={this.state.amenities} />
        <SleepingArrangements beds={this.state.listing.beds} />
        <HouseRules />
      </div>
    );
  }
}

export default App;
