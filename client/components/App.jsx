import React, { Component } from 'react';

import Header from './Header';
import HomeHighlights from './HomeHighlights';
import Description from './Description';
import Amenities from './Amenities';
import AmenitiesModal from './AmenitiesModal';
import SleepingArrangements from './SleepingArrangements';
import HouseRules from './HouseRules';
import Location from './Location';

import styles from '../../public/styles/app.css';

const axios = require('axios');

class App extends Component {
  constructor() {
    super();

    this.toggleDescription = this.toggleDescription.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleHouseRules = this.toggleHouseRules.bind(this);

    this.state = {
      listing: {},
      description: '',
      homeHighlights: [],
      amenities: [],
      houseRules: {},
      showDescription: true,
      showHouseRules: false,
      showAmenitiesModal: false,
    };
  }

  componentDidMount() {
    const roomId = window.location.pathname.split('/')[2];

    axios.get(`/rooms/${roomId}/x`)
      .then((res) => {
        const { data } = res;
        console.log(res.data);

        this.setState({
          listing: data.listing,
          homeHighlights: this.formatHomeHighlights(data),
          amenities: this.formatAmenities(this.collectAmenities(data)),
          houseRules: this.formatHouseRules(data.house_rules),
          description: data.listing.description.split('||').join('\n').split('/').join(','),
        });
      });
  }

  formatLines(line) {
    const that = this;
    return line[0].toUpperCase() + line.slice(1).replace(/_/g, ' ');
  }

  collectAmenities(data) {
    const that = this;
    const amenitiesList = ['basic', 'facilities', 'guest_access', 'dining', 'bed_and_bath', 'safety_features'];
    return amenitiesList.reduce((accum, current) => {
      if (data[current]) {
        accum[current] = data[current];
      }
      return accum;
    }, {});
  }

  formatAmenities(amenities) {
    const amenitiesDescription = {
      wifi: 'Continuous access in the listing',
      laptop_friendly_workspace: 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
      essentials: 'Towels, bed sheets, soap, and toilet paper',
      parking: 'Free parking on premises',
      kitchen: 'Space where guests can cook their own meals',
      washer: 'In the building, free or for a fee',
      dryer: 'In the building, free or for a fee',
    };

    const results = {};
    Object.keys(amenities).forEach((category) => {
      Object.keys(amenities[category]).forEach((amenity) => {
        const amenityVal = amenitiesDescription[amenity] ? amenitiesDescription[amenity] : amenity;
        if (!results[this.formatLines(category)]) {
          results[this.formatLines(category)] = {};
        }
        if (amenity !== 'id') {
          results[this.formatLines(category)][this.formatLines(amenity)] = this.formatLines(amenityVal);
        }
      });
    });
    return results;
  }

  formatHomeHighlights(data) {
    const that = this;
    const { header1, header2, header3 } = data.home_highlights;
    const { message1, message2, message3 } = data.home_highlights;
    return [
      { headline: header1, message: message1 },
      { headline: header2, message: message2 },
      { headline: header3, message: message3 },
    ];
  }

  formatHouseRules(rules) {
    const ruleSet = {
      suitable_for_children: 'Not safe or suitable for children (0-12 years)',
      smoking: 'No smoking',
      pets: 'Not suitable for pets',
      events: 'No parties or events',
      check_in: `Check-in is anytime after ${rules.check_in}PM`,
      check_out: `Check out by ${rules.check_out}PM`,
      custom_message: `${rules.custom_message}`,
      stair_access: 'Must climb stairs',
      security_deposit: 'Security Deposit - if you damage the home, you may be charged up to $300',
    };

    const results = {};
    Object.keys(rules).forEach(
      (rule) => {
        if (rules[rule]) {
          results[this.formatLines(rule)] = ruleSet[rule];
        }
      },
    );
    return results;
  }

  toggleDescription() {
    const { showDescription } = this.state;
    this.setState({
      showDescription: !showDescription,
    });
  }

  toggleModal() {
    const { showAmenitiesModal } = this.state;
    this.setState({
      showAmenitiesModal: !showAmenitiesModal,
    });
  }

  toggleHouseRules() {
    const { showHouseRules } = this.state;
    this.setState({
      showHouseRules: !showHouseRules,
    });
  }

  render() {
    const { showAmenitiesModal } = this.state;
    const { listing } = this.state;
    const { description } = this.state;
    const { showDescription } = this.state;
    const { homeHighlights } = this.state;
    const { amenities } = this.state;
    const { houseRules } = this.state;
    const { showHouseRules } = this.state;

    return (
      <div className="wrapper">
        {
          showAmenitiesModal
          && <AmenitiesModal toggleModal={this.toggleModal} amenities={amenities} />
        }
        <Header listing={listing} />
        <HomeHighlights highlights={homeHighlights} />
        <Description
          descriptionBody={description}
          toggle={this.toggleDescription}
          showDescription={showDescription}
        />
        <Amenities
          amenities={amenities}
          showModal={showAmenitiesModal}
          toggleModal={this.toggleModal}
        />
        <SleepingArrangements beds={listing.beds} />
        <HouseRules
          toggleHouseRules={this.toggleHouseRules}
          showHouseRules={showHouseRules}
          rules={houseRules}
        />
        <Location city={listing.city} state={listing.state} />
      </div>
    );
  }
}

export default App;
